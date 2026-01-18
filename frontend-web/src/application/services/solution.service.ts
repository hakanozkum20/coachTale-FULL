import { QuestionSolution, type SolveQuestionRequest, type SolveQuestionResponse } from '../../core/entities';
import { ISolutionRepository } from '../ports/repository.port';

/**
 * Solution Service
 * Handles photo solution business logic
 */
export class SolutionService {
  constructor(private readonly solutionRepository: ISolutionRepository) {}

  /**
   * Solve a question from photo
   */
  async solveQuestion(request: SolveQuestionRequest): Promise<SolveQuestionResponse> {
    return await this.solutionRepository.solveQuestion(request);
  }

  /**
   * Get solution history
   */
  async getHistory(): Promise<QuestionSolution[]> {
    const solutions = await this.solutionRepository.getHistory();
    // Sort by created date descending
    return solutions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * Get a specific solution
   */
  async getSolution(id: string): Promise<QuestionSolution> {
    return await this.solutionRepository.getSolution(id);
  }

  /**
   * Delete a solution
   */
  async deleteSolution(id: string): Promise<void> {
    await this.solutionRepository.deleteSolution(id);
  }

  /**
   * Get solutions by lesson
   */
  async getSolutionsByLesson(lesson: string): Promise<QuestionSolution[]> {
    const solutions = await this.getHistory();
    return solutions.filter((s) => s.lesson === lesson);
  }

  /**
   * Get recent solutions (last 30 days)
   */
  async getRecentSolutions(days: number = 30): Promise<QuestionSolution[]> {
    const solutions = await this.getHistory();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    return solutions.filter((s) => s.createdAt >= cutoffDate);
  }

  /**
   * Get solution statistics by lesson
   */
  async getLessonStats(): Promise<Record<string, number>> {
    const solutions = await this.getHistory();
    const stats: Record<string, number> = {};

    for (const solution of solutions) {
      if (solution.lesson) {
        stats[solution.lesson] = (stats[solution.lesson] || 0) + 1;
      }
    }

    return stats;
  }
}
