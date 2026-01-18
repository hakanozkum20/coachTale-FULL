import { useState } from 'react'
import {
  Camera,
  Clock,
  Calendar,
  Upload,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuthStore } from '@/stores/auth-store'

export function Workspace() {
  const { user } = useAuthStore()
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setIsBreak(false)
    setPomodoroTime(25 * 60)
  }

  return (
    <div className='flex flex-1 flex-col gap-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Çalışma Masası</h1>
        <p className='text-muted-foreground'>
          Fotoğraf çözüm, pomodoro ve çalışma planın tek bir yerde
        </p>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        {/* Photo Solve Section */}
        <Card className='lg:col-span-1'>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <Camera className='h-5 w-5 text-purple-500' />
              <CardTitle>Fotoğraf Çözüm</CardTitle>
            </div>
            <CardDescription>
              Soru fotoğrafını çek, AI ile çöz
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex aspect-video items-center justify-center rounded-lg border-2 border-dashed bg-muted/20'>
              <div className='text-center'>
                <Upload className='mx-auto h-12 w-12 text-muted-foreground' />
                <p className='mt-4 text-sm text-muted-foreground'>
                  Fotoğrafı sürükleyin
                </p>
                <Button className='mt-3' size='sm' variant='outline'>
                  Dosya Seçin
                </Button>
              </div>
            </div>
            <div className='text-xs text-muted-foreground space-y-1'>
              <p>• JPG, PNG, HEIC</p>
              <p>• Max 10MB</p>
            </div>
          </CardContent>
        </Card>

        {/* Pomodoro Section */}
        <Card className='lg:col-span-1'>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <Clock className='h-5 w-5 text-orange-500' />
              <CardTitle>Pomodoro</CardTitle>
            </div>
            <CardDescription>
              {isBreak ? 'Mola zamanı!' : 'Odaklanma süresi'}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='flex aspect-square max-w-[200px] flex-col items-center justify-center rounded-full border-8 mx-auto bg-muted'>
              <div className='text-center'>
                <div className='text-5xl font-bold'>{formatTime(pomodoroTime)}</div>
                <div className='text-xs text-muted-foreground mt-2'>
                  {isBreak ? 'Mola' : 'Odaklanma'}
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-3'>
              <Button
                size='lg'
                onClick={toggleTimer}
                variant={isRunning ? 'outline' : 'default'}
              >
                {isRunning ? (
                  <>
                    <Pause className='mr-2 h-4 w-4' />
                    Duraklat
                  </>
                ) : (
                  <>
                    <Play className='mr-2 h-4 w-4' />
                    Başlat
                  </>
                )}
              </Button>
              <Button size='lg' variant='outline' onClick={resetTimer}>
                <RotateCcw className='mr-2 h-4 w-4' />
                Sıfırla
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Study Plan Section */}
        <Card className='lg:col-span-1'>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <Calendar className='h-5 w-5 text-blue-500' />
              <CardTitle>Çalışma Planı</CardTitle>
            </div>
            <CardDescription>
              Bugünün programı
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>
            <div className='space-y-2'>
              {[
                { time: '09:00', subject: 'Matematik', topic: 'Türev', completed: true },
                { time: '10:00', subject: 'Fizik', topic: 'Kuvvet ve Hareket', completed: false },
                { time: '11:00', subject: 'Kimya', topic: 'Kimyasal Tepkimeler', completed: false },
                { time: '14:00', subject: 'Biyoloji', topic: 'Hücre', completed: false },
              ].map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                    task.completed ? 'bg-muted/50' : ''
                  }`}
                >
                  <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                      <span className='text-sm text-muted-foreground'>{task.time}</span>
                      <span className='font-medium text-sm'>{task.subject}</span>
                    </div>
                    <p className='text-xs text-muted-foreground mt-0.5'>{task.topic}</p>
                  </div>
                  <div
                    className={`h-2 w-2 rounded-full ${
                      task.completed ? 'bg-green-500' : 'bg-muted'
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - Daily Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Günlük Özet</CardTitle>
          <CardDescription>İlerlemenizi takip edin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='space-y-1'>
              <p className='text-sm text-muted-foreground'>Tamamlanan Pomodoro</p>
              <p className='text-2xl font-bold'>3</p>
            </div>
            <div className='space-y-1'>
              <p className='text-sm text-muted-foreground'>Toplam Odak Süresi</p>
              <p className='text-2xl font-bold'>1s 15d</p>
            </div>
            <div className='space-y-1'>
              <p className='text-sm text-muted-foreground'>Çözülen Soru</p>
              <p className='text-2xl font-bold'>12</p>
            </div>
            <div className='space-y-1'>
              <p className='text-sm text-muted-foreground'>Tamamlanan Görev</p>
              <p className='text-2xl font-bold'>1/4</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
