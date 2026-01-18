import { createFileRoute } from '@tanstack/react-router';
import { SolutionsPage } from '@/features/solutions';

export const Route = createFileRoute('/_authenticated/solutions')({
  component: SolutionsPage,
});
