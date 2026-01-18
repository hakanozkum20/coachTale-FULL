/**
 * Exam Detail Entity
 */
export class ExamDetail {
  constructor(
    public readonly id: string,
    public readonly examResultId: string,
    public readonly lesson: string,
    public readonly topic: string | null,
    public readonly correct: number,
    public readonly incorrect: number,
    public readonly empty: number,
    public readonly net: number,
  ) {}

  /**
   * Get total questions
   */
  getTotal(): number {
    return this.correct + this.incorrect + this.empty;
  }

  /**
   * Get success rate
   */
  getSuccessRate(): number {
    const total = this.getTotal();
    if (total === 0) return 0;
    return (this.correct / total) * 100;
  }

  static fromDTO(dto: ExamDetailDTO): ExamDetail {
    return new ExamDetail(
      dto.id,
      dto.examResultId,
      dto.lesson,
      dto.topic ?? null,
      dto.correct,
      dto.incorrect,
      dto.empty,
      dto.net,
    );
  }

  toDTO(): ExamDetailDTO {
    return {
      id: this.id,
      examResultId: this.examResultId,
      lesson: this.lesson,
      topic: this.topic ?? undefined,
      correct: this.correct,
      incorrect: this.incorrect,
      empty: this.empty,
      net: this.net,
    };
  }
}

export interface ExamDetailDTO {
  id: string;
  examResultId: string;
  lesson: string;
  topic?: string;
  correct: number;
  incorrect: number;
  empty: number;
  net: number;
}

/**
 * Exam Result Entity
 */
export class ExamResult {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly examType: ExamType,
    public readonly name: string | null,
    public readonly score: number | null,
    public readonly details: ExamDetail[],
    public readonly examDate: Date,
    public readonly createdAt: Date,
  ) {}

  /**
   * Get total questions across all details
   */
  getTotalQuestions(): number {
    return this.details.reduce((sum, d) => sum + d.getTotal(), 0);
  }

  /**
   * Get total correct
   */
  getTotalCorrect(): number {
    return this.details.reduce((sum, d) => sum + d.correct, 0);
  }

  /**
   * Get total incorrect
   */
  getTotalIncorrect(): number {
    return this.details.reduce((sum, d) => sum + d.incorrect, 0);
  }

  /**
   * Get total empty
   */
  getTotalEmpty(): number {
    return this.details.reduce((sum, d) => sum + d.empty, 0);
  }

  /**
   * Get overall net score
   */
  getOverallNet(): number {
    return this.details.reduce((sum, d) => sum + d.net, 0);
  }

  /**
   * Get display name
   */
  getDisplayName(): string {
    return this.name ?? this.examType;
  }

  static fromDTO(dto: ExamResultDTO): ExamResult {
    return new ExamResult(
      dto.id,
      dto.userId,
      dto.examType as ExamType,
      dto.name ?? null,
      dto.score ?? null,
      dto.details.map((d) => ExamDetail.fromDTO(d)),
      new Date(dto.examDate),
      new Date(dto.createdAt),
    );
  }

  toDTO(): ExamResultDTO {
    return {
      id: this.id,
      userId: this.userId,
      examType: this.examType,
      name: this.name ?? undefined,
      score: this.score ?? undefined,
      details: this.details.map((d) => d.toDTO()),
      examDate: this.examDate.toISOString(),
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export interface ExamResultDTO {
  id: string;
  userId: string;
  examType: string;
  name?: string;
  score?: number;
  details: ExamDetailDTO[];
  examDate: string;
  createdAt: string;
}

/**
 * Exam Types
 */
export enum ExamType {
  TYT = 'TYT',
  AYT = 'AYT',
  YDS = 'YDS',
  LGS = 'LGS',
  OTHER = 'OTHER',
}

/**
 * Add Exam Result Request
 */
export interface AddExamResultRequest {
  examType: ExamType;
  name?: string;
  score?: number;
  details: Omit<ExamDetailDTO, 'id' | 'examResultId'>[];
}

/**
 * Exam Analysis Response
 */
export interface ExamAnalysis {
  examType: ExamType;
  averageScore: number;
  bestLesson: string;
  worstLesson: string;
  recommendations: string[];
}
