import {
  StudyPlan,
  StudyPlanStatus,
  type StudyPlanContent,
  type GenerateStudyPlanResponse,
} from '../../core/entities';
import { IStudyPlanRepository } from '../ports/repository.port';

/**
 * Study Plan Service
 * Handles study plan business logic
 */
export class StudyPlanService {
  constructor(private readonly studyPlanRepository: IStudyPlanRepository) {}

  /**
   * Generate a new AI study plan
   */
  async generatePlan(): Promise<GenerateStudyPlanResponse> {
    return await this.studyPlanRepository.generatePlan();
  }

  /**
   * Get all study plans
   */
  async getPlans(): Promise<StudyPlan[]> {
    const plans = await this.studyPlanRepository.getPlans();
    // Sort by created date descending
    return plans.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * Get active study plan
   */
  async getActivePlan(): Promise<StudyPlan | null> {
    const plans = await this.getPlans();
    return plans.find((p) => p.status === StudyPlanStatus.ACTIVE) ?? null;
  }

  /**
   * Get a specific study plan
   */
  async getPlan(id: string): Promise<StudyPlan> {
    return await this.studyPlanRepository.getPlan(id);
  }

  /**
   * Update study plan
   */
  async updatePlan(id: string, updates: Partial<StudyPlan>): Promise<StudyPlan> {
    return await this.studyPlanRepository.updatePlan(id, updates);
  }

  /**
   * Delete study plan
   */
  async deletePlan(id: string): Promise<void> {
    await this.studyPlanRepository.deletePlan(id);
  }

  /**
   * Archive study plan
   */
  async archivePlan(id: string): Promise<StudyPlan> {
    return await this.studyPlanRepository.archivePlan(id);
  }

  /**
   * Complete study plan
   */
  async completePlan(id: string): Promise<StudyPlan> {
    return await this.studyPlanRepository.completePlan(id);
  }

  /**
   * Toggle task completion
   */
  async toggleTask(planId: string, taskId: string, completed: boolean): Promise<StudyPlan> {
    return await this.studyPlanRepository.updateTask(planId, taskId, completed);
  }

  /**
   * Get today's tasks from active plan
   */
  async getTodaysTasks(): Promise<{ plan: StudyPlan; tasks: StudyPlanContent['days'][0]['tasks'] } | null> {
    const activePlan = await this.getActivePlan();
    if (!activePlan) return null;

    const today = new Date().toISOString().split('T')[0];
    const todayDay = activePlan.content.days.find((d) => d.date === today);

    if (!todayDay) return null;

    return {
      plan: activePlan,
      tasks: todayDay.tasks,
    };
  }

  /**
   * Get upcoming tasks (next 7 days)
   */
  async getUpcomingTasks(): Promise<
    Array<{ date: string; tasks: StudyPlanContent['days'][0]['tasks'] }>
  > {
    const activePlan = await this.getActivePlan();
    if (!activePlan) return [];

    const today = new Date();
    const upcoming: Array<{ date: string; tasks: StudyPlanContent['days'][0]['tasks'] }> = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];

      const day = activePlan.content.days.find((d) => d.date === dateStr);
      if (day && day.tasks.length > 0) {
        upcoming.push({ date: dateStr, tasks: day.tasks });
      }
    }

    return upcoming;
  }

  /**
   * Get study statistics
   */
  async getStudyStats(): Promise<{
    totalPlans: number;
    activePlans: number;
    completedPlans: number;
    totalTasks: number;
    completedTasks: number;
    upcomingTasks: number;
  }> {
    const plans = await this.getPlans();

    let totalTasks = 0;
    let completedTasks = 0;
    let upcomingTasks = 0;

    for (const plan of plans) {
      for (const day of plan.content.days) {
        const isTodayOrFuture = new Date(day.date) >= new Date(new Date().toDateString());
        totalTasks += day.tasks.length;
        completedTasks += day.tasks.filter((t) => t.completed).length;
        if (isTodayOrFuture) {
          upcomingTasks += day.tasks.filter((t) => !t.completed).length;
        }
      }
    }

    return {
      totalPlans: plans.length,
      activePlans: plans.filter((p) => p.status === StudyPlanStatus.ACTIVE).length,
      completedPlans: plans.filter((p) => p.status === StudyPlanStatus.COMPLETED).length,
      totalTasks,
      completedTasks,
      upcomingTasks,
    };
  }
}
