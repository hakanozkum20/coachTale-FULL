import {
  StudyPlan,
  StudyPlanStatus,
  type GenerateStudyPlanResponse,
  type StudyPlanDTO,
  type StudyPlanContent,
} from '../../core/entities';
import { IStudyPlanRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Study Plan Repository Adapter
 */
export class StudyPlanRepositoryAdapter implements IStudyPlanRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Generate new study plan
   */
  async generatePlan(): Promise<GenerateStudyPlanResponse> {
    const response = await this.apiService.post<{
      id: string;
      startDate: string;
      endDate: string;
      content: StudyPlanContent;
      status: StudyPlanStatus;
    }>('/study-plans/generate', {});

    return response;
  }

  /**
   * Get all study plans
   */
  async getPlans(): Promise<StudyPlan[]> {
    const plans = await this.apiService.get<StudyPlanDTO[]>('/study-plans');
    return plans.map((p) => StudyPlan.fromDTO(p));
  }

  /**
   * Get specific study plan
   */
  async getPlan(id: string): Promise<StudyPlan> {
    const plan = await this.apiService.get<StudyPlanDTO>(`/study-plans/${id}`);
    return StudyPlan.fromDTO(plan);
  }

  /**
   * Update study plan
   */
  async updatePlan(id: string, updates: Partial<StudyPlan>): Promise<StudyPlan> {
    const plan = await this.apiService.patch<StudyPlanDTO>(`/study-plans/${id}`, updates);
    return StudyPlan.fromDTO(plan);
  }

  /**
   * Delete study plan
   */
  async deletePlan(id: string): Promise<void> {
    await this.apiService.delete<void>(`/study-plans/${id}`);
  }

  /**
   * Archive study plan
   */
  async archivePlan(id: string): Promise<StudyPlan> {
    return await this.updatePlan(id, { status: StudyPlanStatus.ARCHIVED });
  }

  /**
   * Complete study plan
   */
  async completePlan(id: string): Promise<StudyPlan> {
    return await this.updatePlan(id, { status: StudyPlanStatus.COMPLETED });
  }

  /**
   * Update task completion status
   */
  async updateTask(planId: string, taskId: string, completed: boolean): Promise<StudyPlan> {
    const plan = await this.getPlan(planId);

    // Find and update the task
    for (const day of plan.content.days) {
      const task = day.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = completed;
        break;
      }
    }

    return await this.updatePlan(planId, { content: plan.content });
  }
}
