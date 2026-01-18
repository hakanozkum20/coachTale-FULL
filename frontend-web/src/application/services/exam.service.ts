import { ExamResult, ExamType, type AddExamResultRequest, type ExamAnalysis } from '../../core/entities';
import { IExamRepository } from '../ports/repository.port';

/**
 * Exam Service
 * Handles exam tracking and analysis business logic
 */
export class ExamService {
  constructor(private readonly examRepository: IExamRepository) {}

  /**
   * Add a new exam result
   */
  async addResult(request: AddExamResultRequest): Promise<ExamResult> {
    return await this.examRepository.addResult(request);
  }

  /**
   * Get all exam results
   */
  async getResults(): Promise<ExamResult[]> {
    const results = await this.examRepository.getResults();
    // Sort by exam date descending
    return results.sort((a, b) => b.examDate.getTime() - a.examDate.getTime());
  }

  /**
   * Get a specific exam result
   */
  async getResult(id: string): Promise<ExamResult> {
    return await this.examRepository.getResult(id);
  }

  /**
   * Delete an exam result
   */
  async deleteResult(id: string): Promise<void> {
    await this.examRepository.deleteResult(id);
  }

  /**
   * Analyze exam results
   */
  async analyzeResults(examType?: string): Promise<ExamAnalysis> {
    return await this.examRepository.analyzeResults(examType);
  }

  /**
   * Get results by exam type
   */
  async getResultsByExamType(examType: ExamType): Promise<ExamResult[]> {
    return await this.examRepository.getResultsByExamType(examType);
  }

  /**
   * Get latest result for each exam type
   */
  async getLatestResultsByType(): Promise<Map<ExamType, ExamResult>> {
    const results = await this.getResults();
    const latestByType = new Map<ExamType, ExamResult>();

    for (const result of results) {
      const existing = latestByType.get(result.examType);
      if (!existing || result.examDate > existing.examDate) {
        latestByType.set(result.examType, result);
      }
    }

    return latestByType;
  }

  /**
   * Calculate average score by exam type
   */
  async getAverageScores(): Promise<Map<ExamType, number>> {
    const results = await this.getResults();
    const scoresByType = new Map<ExamType, number[]>();

    for (const result of results) {
      if (result.score !== null) {
        const scores = scoresByType.get(result.examType) ?? [];
        scores.push(result.score);
        scoresByType.set(result.examType, scores);
      }
    }

    const averages = new Map<ExamType, number>();
    for (const [type, scores] of scoresByType.entries()) {
      const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
      averages.set(type, Math.round(avg * 100) / 100);
    }

    return averages;
  }

  /**
   * Get performance trend for a specific lesson
   */
  async getLessonTrend(lesson: string): Promise<{ date: Date; net: number }[]> {
    const results = await this.getResults();
    const trend: { date: Date; net: number }[] = [];

    for (const result of results) {
      const detail = result.details.find((d) => d.lesson === lesson);
      if (detail) {
        trend.push({
          date: result.examDate,
          net: detail.net,
        });
      }
    }

    return trend.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  /**
   * Get weakest and strongest lessons across all exams
   */
  async getLessonPerformance(): Promise<{
    strongest: { lesson: string; avgNet: number };
    weakest: { lesson: string; avgNet: number };
  }> {
    const results = await this.getResults();
    const lessonNets = new Map<string, number[]>();

    for (const result of results) {
      for (const detail of result.details) {
        const nets = lessonNets.get(detail.lesson) ?? [];
        nets.push(detail.net);
        lessonNets.set(detail.lesson, nets);
      }
    }

    const averages: { lesson: string; avgNet: number }[] = [];
    for (const [lesson, nets] of lessonNets.entries()) {
      averages.push({
        lesson,
        avgNet: nets.reduce((sum, n) => sum + n, 0) / nets.length,
      });
    }

    averages.sort((a, b) => b.avgNet - a.avgNet);

    return {
      strongest: averages[0] ?? { lesson: '-', avgNet: 0 },
      weakest: averages[averages.length - 1] ?? { lesson: '-', avgNet: 0 },
    };
  }
}
