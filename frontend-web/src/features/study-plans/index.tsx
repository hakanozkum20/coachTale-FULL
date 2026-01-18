import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/presentation/hooks';
import {
  useStudyPlans,
  useActiveStudyPlan,
  useTodaysTasks,
  useGenerateStudyPlan,
} from '@/presentation/hooks';
import { Calendar, CheckCircle2, Circle, Plus, Loader2, TrendingUp } from 'lucide-react';

export function StudyPlansPage() {
  const { user } = useAuth();
  const { data: plans, isLoading } = useStudyPlans();
  const { data: activePlan } = useActiveStudyPlan();
  const { data: todaysTasks } = useTodaysTasks();
  const { generatePlan, isGenerating } = useGenerateStudyPlan();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Çalışma Planları</h1>
          <p className="text-muted-foreground">AI-powered study plans</p>
        </div>
        <Button onClick={() => generatePlan()} disabled={isGenerating}>
          {isGenerating ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Plus className="h-4 w-4 mr-2" />
          )}
          Yeni Plan Oluştur
        </Button>
      </div>

      {/* Today's Tasks */}
      {todaysTasks && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Bugünün Görevleri
            </CardTitle>
            <CardDescription>
              {todaysTasks.tasks.filter((t) => t.completed).length} / {todaysTasks.tasks.length}{' '}
              tamamlandı
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {todaysTasks.tasks.map((task) => (
                <TaskItem key={task.id} task={task} planId={todaysTasks.plan.id} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plans List */}
      <div className="grid gap-6 md:grid-cols-2">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : plans && plans.length > 0 ? (
          plans.map((plan) => <StudyPlanCard key={plan.id} plan={plan} />)
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            Henüz çalışma planı yok. AI ile kişiselleştirilmiş plan oluştur.
          </div>
        )}
      </div>
    </div>
  );
}

function TaskItem({ task, planId }: { task: any; planId: string }) {
  const { toggleTask, isTogglingTask } = useStudyPlan(planId);

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
        task.completed ? 'bg-muted/50' : 'bg-card'
      }`}
    >
      <button
        onClick={() => toggleTask({ taskId: task.id, completed: !task.completed })}
        disabled={isTogglingTask}
        className="flex-shrink-0"
      >
        {task.completed ? (
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        ) : (
          <Circle className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
          {task.lesson} - {task.topic}
        </div>
        <div className="text-xs text-muted-foreground">{task.duration}dk</div>
      </div>
    </div>
  );
}

function StudyPlanCard({ plan }: { plan: any }) {
  const { archivePlan, completePlan, isArchiving, isCompleting } = useStudyPlan(plan.id);
  const progress = plan.getProgress();

  return (
    <Card className={plan.isActive() ? 'border-primary' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{plan.content.title}</CardTitle>
            <CardDescription>
              {new Date(plan.startDate).toLocaleDateString('tr-TR')} -{' '}
              {new Date(plan.endDate).toLocaleDateString('tr-TR')}
            </CardDescription>
          </div>
          <div className={`px-2 py-1 text-xs font-medium rounded-full ${
            plan.isActive() ? 'bg-green-100 text-green-700' :
            plan.isCompleted() ? 'bg-blue-100 text-blue-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {plan.status}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">İlerleme</span>
              <span className="font-medium">{progress.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Toplam Görev</div>
              <div className="font-medium">
                {plan.content.days.reduce((sum: number, day: any) => sum + day.tasks.length, 0)}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Tamamlanan</div>
              <div className="font-medium">
                {plan.content.days.reduce(
                  (sum: number, day: any) => sum + day.tasks.filter((t: any) => t.completed).length,
                  0
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          {plan.isActive() && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => completePlan()}
                disabled={isCompleting}
                className="flex-1"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Tamamla
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => archivePlan()}
                disabled={isArchiving}
              >
                Arşivle
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
