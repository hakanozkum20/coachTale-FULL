import {
  LayoutDashboard,
  MessageSquare,
  Camera,
  Clock,
  Calendar,
  BarChart3,
  Settings,
  Users,
  GraduationCap,
  Trophy,
  FileText,
} from 'lucide-react';
import { useAuthStore } from '@/stores/auth-store';
import { type SidebarData } from '../types';

export const sidebarData: SidebarData = {
  user: {
    name: 'CoachTale User',
    email: 'user@coachtale.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=coachtale',
  },
  teams: [
    {
      name: 'CoachTale',
      logo: GraduationCap,
      plan: 'Pro',
    },
  ],
  navGroups: [
    {
      title: 'Ana Menü',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
        {
          title: 'AI Chat',
          url: '/chats',
          icon: MessageSquare,
          badge: 'Beta',
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
        {
          title: 'Fotoğraflı Çözüm',
          url: '/solutions',
          icon: Camera,
          roles: ['STUDENT', 'ADMIN'],
        },
      ],
    },
    {
      title: 'Çalışma Araçları',
      items: [
        {
          title: 'Pomodoro',
          url: '/pomodoro',
          icon: Clock,
          roles: ['STUDENT', 'ADMIN'],
        },
        {
          title: 'Çalışma Planları',
          url: '/study-plans',
          icon: Calendar,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
        {
          title: 'Sınav Takibi',
          url: '/exams',
          icon: FileText,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
        {
          title: 'Rozetler',
          url: '/badges',
          icon: Trophy,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
        {
          title: 'Analitik',
          url: '/analytics',
          icon: BarChart3,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
      ],
    },
    {
      title: 'Yönetim',
      items: [
        {
          title: 'Kullanıcılar',
          url: '/users',
          icon: Users,
          roles: ['ADMIN'],
        },
      ],
    },
    {
      title: 'Ayarlar',
      items: [
        {
          title: 'Profil',
          url: '/settings',
          icon: Settings,
          roles: ['STUDENT', 'PARENT', 'ADMIN'],
        },
      ],
    },
  ],
};
