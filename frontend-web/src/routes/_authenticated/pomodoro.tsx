import { createFileRoute } from '@tanstack/react-router';
import { PomodoroPage } from '@/features/pomodoro';

export const Route = createFileRoute('/_authenticated/pomodoro')({
  component: PomodoroPage,
});
