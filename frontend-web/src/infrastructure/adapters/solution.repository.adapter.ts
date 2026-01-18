import {
  QuestionSolution,
  type SolveQuestionRequest,
  type SolveQuestionResponse,
  type QuestionSolutionDTO,
} from '../../core/entities';
import { ISolutionRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Solution Repository Adapter
 */
export class SolutionRepositoryAdapter implements ISolutionRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Solve question from photo
   */
  async solveQuestion(request: SolveQuestionRequest): Promise<SolveQuestionResponse> {
    const response = await this.apiService.post<QuestionSolutionDTO>('/solutions/solve', request);

    return {
      id: response.id,
      imageUrl: response.imageUrl,
      ocrText: response.ocrText,
      solution: response.solution,
      lesson: response.lesson,
      topic: response.topic,
      createdAt: response.createdAt,
    };
  }

  /**
   * Get solution history
   */
  async getHistory(): Promise<QuestionSolution[]> {
    const solutions = await this.apiService.get<QuestionSolutionDTO[]>('/solutions/history');
    return solutions.map((s) => QuestionSolution.fromDTO(s));
  }

  /**
   * Get specific solution
   */
  async getSolution(id: string): Promise<QuestionSolution> {
    const solution = await this.apiService.get<QuestionSolutionDTO>(`/solutions/${id}`);
    return QuestionSolution.fromDTO(solution);
  }

  /**
   * Delete solution
   */
  async deleteSolution(id: string): Promise<void> {
    await this.apiService.delete<void>(`/solutions/${id}`);
  }
}
