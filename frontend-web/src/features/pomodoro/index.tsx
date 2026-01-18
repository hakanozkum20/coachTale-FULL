import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/presentation/hooks';
import { usePomodoroSettings, usePomodoroSession, useDailyFocusStats } from '@/presentation/hooks';
import {
  TrendingUp,
  Play,
  Pause,
  SkipForward,
  Settings,
  Loader2,
  Coffee,
  Brain,
  CheckCircle2,
} from 'lucide-react';

type TimerMode = 'work' | 'shortBreak' | 'longBreak';

export function PomodoroPage() {
  const { user, isAuthenticated } = useAuth();
  const { data: settings } = usePomodoroSettings(user?.id || '');
  const { activeSession, startSession, completeSession, isStarting, isCompleting } =
    usePomodoroSession(user?.id || '');

  // Timer state - moved to parent to preserve across tab changes
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Giriş yapılıyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pomodoro</h1>
        <p className="text-muted-foreground">Focus time management and statistics</p>
      </div>

      <Tabs defaultValue="timer" className="space-y-4">
        <TabsList>
          <TabsTrigger value="timer">Timer</TabsTrigger>
          <TabsTrigger value="stats">İstatistikler</TabsTrigger>
          <TabsTrigger value="settings">Ayarlar</TabsTrigger>
        </TabsList>

        <TabsContent value="timer">
          <PomodoroTimer
            userId={user.id}
            settings={settings}
            activeSession={activeSession}
            startSession={startSession}
            completeSession={completeSession}
            isStarting={isStarting}
            isCompleting={isCompleting}
            mode={mode}
            setMode={setMode}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            sessionsCompleted={sessionsCompleted}
            setSessionsCompleted={setSessionsCompleted}
          />
        </TabsContent>

        <TabsContent value="stats">
          <PomodoroStats userId={user.id} />
        </TabsContent>

        <TabsContent value="settings">
          <PomodoroSettings userId={user.id} settings={settings} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface PomodoroTimerProps {
  userId: string;
  settings: any;
  activeSession: any;
  startSession: (params: any) => Promise<void>;
  completeSession: (sessionId: string) => Promise<void>;
  isStarting: boolean;
  isCompleting: boolean;
  mode: TimerMode;
  setMode: (mode: TimerMode) => void;
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  sessionsCompleted: number;
  setSessionsCompleted: (count: number) => void;
}

function PomodoroTimer({
  settings,
  activeSession,
  startSession,
  completeSession,
  isStarting,
  isCompleting,
  mode,
  setMode,
  timeLeft,
  setTimeLeft,
  isRunning,
  setIsRunning,
  sessionsCompleted,
  setSessionsCompleted,
}: PomodoroTimerProps) {
  // Get duration based on mode
  const getDuration = useCallback(() => {
    if (!settings) return 25 * 60;
    switch (mode) {
      case 'work':
        return settings.workDuration * 60;
      case 'shortBreak':
        return settings.shortBreakDuration * 60;
      case 'longBreak':
        return settings.longBreakDuration * 60;
    }
  }, [settings, mode]);

  // Initialize timer when settings load (only if timer is not running)
  useEffect(() => {
    if (settings && !isRunning && timeLeft === 25 * 60) {
      setTimeLeft(getDuration());
    }
  }, [settings, mode, getDuration]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      // Timer finished
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const handleTimerComplete = async () => {
    setIsRunning(false);

    if (mode === 'work' && activeSession) {
      // Complete work session
      await completeSession(activeSession.id);
      setSessionsCompleted((prev) => prev + 1);

      // Determine next break type
      const newSessionsCount = sessionsCompleted + 1;
      if (settings && newSessionsCount % settings.longBreakInterval === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      // Break finished, go back to work
      setMode('work');
    }

    setTimeLeft(getDuration());
  };

  const handleStart = async () => {
    if (mode === 'work' && !activeSession) {
      // Start new work session
      await startSession({ duration: Math.ceil(timeLeft / 60) });
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleSkip = () => {
    setIsRunning(false);
    handleTimerComplete();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    const total = getDuration();
    return ((total - timeLeft) / total) * 100;
  };

  const getModeInfo = () => {
    switch (mode) {
      case 'work':
        return {
          title: 'Çalışma Zamanı',
          icon: Brain,
          color: 'text-red-500',
          bgColor: 'bg-red-500/10',
        };
      case 'shortBreak':
        return {
          title: 'Kısa Mola',
          icon: Coffee,
          color: 'text-green-500',
          bgColor: 'bg-green-500/10',
        };
      case 'longBreak':
        return {
          title: 'Uzun Mola',
          icon: Coffee,
          color: 'text-blue-500',
          bgColor: 'bg-blue-500/10',
        };
    }
  };

  const modeInfo = getModeInfo();
  const ModeIcon = modeInfo.icon;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Mode Indicator */}
      <Card className={modeInfo.bgColor}>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-3">
            <ModeIcon className={`h-6 w-6 ${modeInfo.color}`} />
            <span className={`text-lg font-semibold ${modeInfo.color}`}>{modeInfo.title}</span>
          </div>
        </CardContent>
      </Card>

      {/* Timer Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Pomodoro Timer</CardTitle>
          <CardDescription className="text-center">
            Oturum {sessionsCompleted + 1} • {settings && `${sessionsCompleted}/${settings.dailyGoal} günlük hedef`}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Circular Timer Display */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg className="w-64 h-64 transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className={modeInfo.color}
                  strokeDasharray={`${2 * Math.PI * 120}`}
                  strokeDashoffset={`${2 * Math.PI * 120 * (1 - getProgress() / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            {!isRunning ? (
              <Button onClick={handleStart} disabled={isStarting} size="lg" className="w-32">
                {isStarting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Başlat
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={handlePause} size="lg" variant="secondary" className="w-32">
                <Pause className="h-5 w-5 mr-2" />
                Duraklat
              </Button>
            )}
            <Button onClick={handleSkip} size="lg" variant="outline">
              <SkipForward className="h-5 w-5 mr-2" />
              Atla
            </Button>
          </div>

          {/* Session Progress */}
          {settings && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Günlük İlerleme</span>
                <span>{sessionsCompleted}/{settings.dailyGoal} oturum</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${Math.min((sessionsCompleted / settings.dailyGoal) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function PomodoroStats({ userId }: { userId: string }) {
  const { data: stats, isLoading } = useDailyFocusStats(userId);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Günlük Odak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{stats?.totalMinutes || 0}dk</div>
          <p className="text-sm text-muted-foreground mt-2">Toplam odak süresi</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Tamamlanan Oturumlar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{stats?.sessionsCompleted || 0}</div>
          <p className="text-sm text-muted-foreground mt-2">Bugün tamamlanan</p>
        </CardContent>
      </Card>
    </div>
  );
}

function PomodoroSettings({ userId, settings: initialSettings }: { userId: string; settings: any }) {
  const { data: settings, isLoading } = usePomodoroSettings(userId);
  const { updateSettings, isUpdating } = usePomodoroSettings(userId);

  const [localSettings, setLocalSettings] = useState({
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    longBreakInterval: 4,
    dailyGoal: 8,
    autoStartBreaks: false,
    autoStartPomodoros: false,
  });

  useEffect(() => {
    if (settings) {
      setLocalSettings({
        workDuration: settings.workDuration,
        shortBreakDuration: settings.shortBreakDuration,
        longBreakDuration: settings.longBreakDuration,
        longBreakInterval: settings.longBreakInterval,
        dailyGoal: settings.dailyGoal,
        autoStartBreaks: settings.autoStartBreaks,
        autoStartPomodoros: settings.autoStartPomodoros,
      });
    }
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSettings(localSettings);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Pomodoro Ayarları
        </CardTitle>
        <CardDescription>Timer sürelerini ve tercihlerinizi özelleştirin</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="workDuration">Çalışma Süresi (dakika)</Label>
              <Input
                id="workDuration"
                type="number"
                min="1"
                max="120"
                value={localSettings.workDuration}
                onChange={(e) => setLocalSettings({ ...localSettings, workDuration: parseInt(e.target.value) || 1 })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortBreakDuration">Kısa Mola (dakika)</Label>
              <Input
                id="shortBreakDuration"
                type="number"
                min="1"
                max="30"
                value={localSettings.shortBreakDuration}
                onChange={(e) => setLocalSettings({ ...localSettings, shortBreakDuration: parseInt(e.target.value) || 1 })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="longBreakDuration">Uzun Mola (dakika)</Label>
              <Input
                id="longBreakDuration"
                type="number"
                min="1"
                max="60"
                value={localSettings.longBreakDuration}
                onChange={(e) => setLocalSettings({ ...localSettings, longBreakDuration: parseInt(e.target.value) || 1 })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="longBreakInterval">Uzun Mola Aralığı (oturum)</Label>
              <Input
                id="longBreakInterval"
                type="number"
                min="1"
                max="10"
                value={localSettings.longBreakInterval}
                onChange={(e) => setLocalSettings({ ...localSettings, longBreakInterval: parseInt(e.target.value) || 1 })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dailyGoal">Günlük Hedef (oturum)</Label>
              <Input
                id="dailyGoal"
                type="number"
                min="1"
                max="20"
                value={localSettings.dailyGoal}
                onChange={(e) => setLocalSettings({ ...localSettings, dailyGoal: parseInt(e.target.value) || 1 })}
              />
            </div>
          </div>

          <Button type="submit" disabled={isUpdating} className="w-full">
            {isUpdating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            Kaydet
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
