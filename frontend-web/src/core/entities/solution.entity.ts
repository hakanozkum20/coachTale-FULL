/**
 * Question Solution Entity
 */
export class QuestionSolution {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly imageUrl: string,
    public readonly ocrText: string | null,
    public readonly solution: string | null,
    public readonly lesson: string | null,
    public readonly topic: string | null,
    public readonly createdAt: Date,
  ) {}

  /**
   * Check if solution is ready
   */
  isReady(): boolean {
    return this.solution !== null;
  }

  /**
   * Check if OCR was successful
   */
  hasOcrText(): boolean {
    return this.ocrText !== null;
  }

  static fromDTO(dto: QuestionSolutionDTO): QuestionSolution {
    return new QuestionSolution(
      dto.id,
      dto.userId,
      dto.imageUrl,
      dto.ocrText ?? null,
      dto.solution ?? null,
      dto.lesson ?? null,
      dto.topic ?? null,
      new Date(dto.createdAt),
    );
  }

  toDTO(): QuestionSolutionDTO {
    return {
      id: this.id,
      userId: this.userId,
      imageUrl: this.imageUrl,
      ocrText: this.ocrText ?? undefined,
      solution: this.solution ?? undefined,
      lesson: this.lesson ?? undefined,
      topic: this.topic ?? undefined,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export interface QuestionSolutionDTO {
  id: string;
  userId: string;
  imageUrl: string;
  ocrText?: string;
  solution?: string;
  lesson?: string;
  topic?: string;
  createdAt: string;
}

/**
 * Solve Question Request
 */
export interface SolveQuestionRequest {
  image: string; // base64 or URL
}

/**
 * Solve Question Response
 */
export interface SolveQuestionResponse {
  id: string;
  imageUrl: string;
  ocrText?: string;
  solution?: string;
  lesson?: string;
  topic?: string;
  createdAt: string;
}
