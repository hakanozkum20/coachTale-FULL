import { useAuthStore } from '@/stores/auth-store'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import {
  BookOpen,
  MessageSquare,
  Camera,
  Clock,
  Calendar,
  BarChart3,
  Settings,
  ArrowRight,
} from 'lucide-react'

export function Dashboard() {
  const { user } = useAuthStore()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Günaydın'
    if (hour < 18) return 'İyi öğleden sonraları'
    return 'İyi akşamlar'
  }

  const getStatCards = () => {
    if (user?.role === 'ADMIN') {
      return [
        { title: 'Toplam Kullanıcı', value: '1,234', change: '+12%', icon: 'users' },
        { title: 'Aktif Abonelik', value: '856', change: '+8%', icon: 'crown' },
        { title: 'Bugünkü Oturum', value: '342', change: '+23%', icon: 'activity' },
        { title: 'AI Kullanımı', value: '5.2K', change: '+18%', icon: 'sparkles' },
      ]
    }

    if (user?.role === 'PARENT') {
      return [
        { title: 'Bağlı Öğrenci', value: '2', icon: 'users' },
        { title: 'Toplam Odak Süresi', value: '124 saat', change: '+15%', icon: 'clock' },
        { title: 'Bu Hafta Deneme', value: '3', icon: 'chart' },
        { title: 'AI Kullanımı', value: '47 soru', change: '+22%', icon: 'sparkles' },
      ]
    }

    return [
      { title: 'Bugünkü Odak', value: '45 dk', change: '+15%', icon: 'target' },
      { title: 'Bu Hafta Streak', value: '5 gün', change: 'Personal Best!', icon: 'activity' },
      { title: 'Kalan AI Soru', value: user?.plan === 'FREE' ? '3' : '15', icon: 'sparkles' },
      { title: 'Son Deneme Puanı', value: '385', change: '+12', icon: 'chart' },
    ]
  }

  const getQuickActions = () => {
    if (user?.role === 'ADMIN') {
      return [
        { title: 'Kullanıcı Yönetimi', description: 'Tüm kullanıcıları gör ve yönet', icon: 'users', href: '/users' },
      ]
    }

    if (user?.role === 'PARENT') {
      return [
        { title: 'Çocuk İlerlemesi', description: 'Öğrenci gelişimini takip et', icon: 'chart', href: '/analytics' },
      ]
    }

    return [
      { title: 'AI Chat', description: 'Soru çözümü için asistan', icon: 'chat', href: '/chats' },
      { title: 'Fotoğraf Çözüm', description: 'Soruyu çek ve çöz', icon: 'camera', href: '/workspace' },
      { title: 'Pomodoro', description: 'Odak yönetimi başlat', icon: 'clock', href: '/workspace' },
      { title: 'Çalışma Programı', description: 'Haftalık planını gör', icon: 'calendar', href: '/workspace' },
    ]
  }

  const statCards = getStatCards()
  const quickActions = getQuickActions()

  return (
    <div className='space-y-6'>
      {/* Welcome Header */}
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>
          {getGreeting()}, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className='text-muted-foreground mt-1'>
          {user?.role === 'ADMIN'
            ? 'Sistem yönetim paneline hoş geldin.'
            : user?.role === 'PARENT'
            ? 'Öğrencilerinin gelişimini buradan takip edebilirsin.'
            : 'Eğitim koçun senin için bugün yapılacakları hazırlıyor.'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>{stat.title}</CardTitle>
              <div className='h-4 w-4 text-muted-foreground'>
                {stat.icon === 'users' && <UsersIcon />}
                {stat.icon === 'crown' && <CrownIcon />}
                {stat.icon === 'activity' && <ActivityIcon />}
                {stat.icon === 'sparkles' && <SparklesIcon />}
                {stat.icon === 'clock' && <ClockIcon />}
                {stat.icon === 'chart' && <ChartIcon />}
                {stat.icon === 'target' && <TargetIcon />}
              </div>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stat.value}</div>
              {stat.change && (
                <p className='text-xs text-muted-foreground'>
                  <span className='text-emerald-500 font-medium'>{stat.change}</span> geçen haftaya göre
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight mb-4'>Hızlı Erişim</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {quickActions.map((action) => (
            <Link key={action.href} to={action.href}>
              <Card className='group cursor-pointer hover:shadow-md transition-all'>
                <CardHeader>
                  <div className='flex items-center justify-between'>
                    <div className='p-2 rounded-lg bg-muted'>
                      {action.icon === 'chat' && <MessageSquare className='h-5 w-5' />}
                      {action.icon === 'camera' && <Camera className='h-5 w-5' />}
                      {action.icon === 'clock' && <Clock className='h-5 w-5' />}
                      {action.icon === 'calendar' && <Calendar className='h-5 w-5' />}
                      {action.icon === 'users' && <UsersIcon />}
                      {action.icon === 'chart' && <BarChart3 className='h-5 w-5' />}
                    </div>
                    <ArrowRight className='h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all' />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className='font-semibold'>{action.title}</h3>
                  <p className='text-sm text-muted-foreground mt-1'>{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Simple icon components
function UsersIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  )
}

function CrownIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <path d='m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14' />
    </svg>
  )
}

function ActivityIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <path d='M3 3v18h18' />
      <path d='m19 9-5 5-4-4-3 3' />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
      <circle cx='12' cy='12' r='10' />
      <circle cx='12' cy='12' r='6' />
      <circle cx='12' cy='12' r='2' />
    </svg>
  )
}
