import {
  ExamResult,
  ExamType,
  type AddExamResultRequest,
  type ExamAnalysis,
  type ExamResultDTO,
} from '../../core/entities';
import { IExamRepository } from '../../application/ports/repository.port';
import { IApiService } from '../../application/ports/api.port';

/**
 * Exam Repository Adapter
 */
export class ExamRepositoryAdapter implements IExamRepository {
  constructor(private readonly apiService: IApiService) {}

  /**
   * Add exam result
   */
  async addResult(request: AddExamResultRequest): Promise<ExamResult> {
    const result = await this.apiService.post<ExamResultDTO>('/exams/results', request);
    return ExamResult.fromDTO(result);
  }

  /**
   * Get all exam results
   */
  async getResults(): Promise<ExamResult[]> {
    const results = await this.apiService.get<ExamResultDTO[]>('/exams/results');
    return results.map((r) => ExamResult.fromDTO(r));
  }

  /**
   * Get specific exam result
   */
  async getResult(id: string): Promise<ExamResult> {
    const result = await this.apiService.get<ExamResultDTO>(`/exams/results/${id}`);
    return ExamResult.fromDTO(result);
  }

  /**
   * Delete exam result
   */
  async deleteResult(id: string): Promise<void> {
    await this.apiService.delete<void>(`/exams/results/${id}`);
  }

  /**
   * Analyze exam results
   */
  async analyzeResults(examType?: string): Promise<ExamAnalysis> {
    const params = examType ? { examType } : undefined;
    return await this.apiService.get<ExamAnalysis>('/exams/analysis', params);
  }

  /**
   * Get results by exam type
   */
  async getResultsByExamType(examType: ExamType): Promise<ExamResult[]> {
    const results = await this.apiService.get<ExamResultDTO[]>('/exams/results', { examType });
    return results.map((r) => ExamResult.fromDTO(r));
  }
}
