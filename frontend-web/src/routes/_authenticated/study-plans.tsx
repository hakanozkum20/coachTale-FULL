import { createFileRoute } from '@tanstack/react-router';
import { StudyPlansPage } from '@/features/study-plans';

export const Route = createFileRoute('/_authenticated/study-plans')({
  component: StudyPlansPage,
});
