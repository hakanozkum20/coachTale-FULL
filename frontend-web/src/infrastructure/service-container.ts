/**
 * Service Container / Dependency Injection
 *
 * This is a simple DI container that manages all service instances.
 * In a more advanced setup, you might use a library like InversifyJS or Awilix.
 */

import { IApiService, IStorageService } from '../application/ports';
import {
  IAuthRepository,
  IPomodoroRepository,
  IChatRepository,
  ISolutionRepository,
  IExamRepository,
  IStudyPlanRepository,
  IBadgeRepository,
  INotificationRepository,
  IUserRepository,
} from '../application/ports/repository.port';

// Services
import {
  AuthService,
  PomodoroService,
  ChatService,
  ExamService,
  StudyPlanService,
  SolutionService,
  BadgeService,
  NotificationService,
  UserService,
} from '../application';

// Infrastructure implementations
import {
  HttpApiService,
  LocalStorageService,
  AuthRepositoryAdapter,
  PomodoroRepositoryAdapter,
  ChatRepositoryAdapter,
  SolutionRepositoryAdapter,
  ExamRepositoryAdapter,
  StudyPlanRepositoryAdapter,
  BadgeRepositoryAdapter,
  NotificationRepositoryAdapter,
  UserRepositoryAdapter,
} from '../infrastructure';

/**
 * Service Container
 * Holds all service instances and manages their dependencies
 */
class ServiceContainer {
  private static instance: ServiceContainer | null = null;

  // Infrastructure
  private _apiService: IApiService;
  private _storageService: IStorageService;

  // Repositories
  private _authRepository: IAuthRepository;
  private _pomodoroRepository: IPomodoroRepository;
  private _chatRepository: IChatRepository;
  private _solutionRepository: ISolutionRepository;
  private _examRepository: IExamRepository;
  private _studyPlanRepository: IStudyPlanRepository;
  private _badgeRepository: IBadgeRepository;
  private _notificationRepository: INotificationRepository;
  private _userRepository: IUserRepository;

  // Application Services
  private _authService: AuthService;
  private _pomodoroService: PomodoroService;
  private _chatService: ChatService;
  private _examService: ExamService;
  private _studyPlanService: StudyPlanService;
  private _solutionService: SolutionService;
  private _badgeService: BadgeService;
  private _notificationService: NotificationService;
  private _userService: UserService;

  private constructor() {
    // Initialize infrastructure
    this._apiService = new HttpApiService({
      baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    });
    this._storageService = new LocalStorageService();

    // Initialize repositories (they depend on infrastructure)
    this._authRepository = new AuthRepositoryAdapter(this._apiService);
    this._pomodoroRepository = new PomodoroRepositoryAdapter(this._apiService);
    this._chatRepository = new ChatRepositoryAdapter(this._apiService);
    this._solutionRepository = new SolutionRepositoryAdapter(this._apiService);
    this._examRepository = new ExamRepositoryAdapter(this._apiService);
    this._studyPlanRepository = new StudyPlanRepositoryAdapter(this._apiService);
    this._badgeRepository = new BadgeRepositoryAdapter(this._apiService);
    this._notificationRepository = new NotificationRepositoryAdapter(this._apiService);
    this._userRepository = new UserRepositoryAdapter(this._apiService);

    // Initialize application services (they depend on repositories)
    this._authService = new AuthService(this._authRepository, this._apiService);
    this._pomodoroService = new PomodoroService(this._pomodoroRepository);
    this._chatService = new ChatService(this._chatRepository);
    this._examService = new ExamService(this._examRepository);
    this._studyPlanService = new StudyPlanService(this._studyPlanRepository);
    this._solutionService = new SolutionService(this._solutionRepository);
    this._badgeService = new BadgeService(this._badgeRepository);
    this._notificationService = new NotificationService(this._notificationRepository);
    this._userService = new UserService(this._userRepository);
  }

  /**
   * Get singleton instance
   */
  static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  /**
   * Reset container (useful for testing)
   */
  static reset(): void {
    ServiceContainer.instance = null;
  }

  // Infrastructure Getters
  get apiService(): IApiService {
    return this._apiService;
  }

  get storageService(): IStorageService {
    return this._storageService;
  }

  // Repository Getters
  get authRepository(): IAuthRepository {
    return this._authRepository;
  }

  get pomodoroRepository(): IPomodoroRepository {
    return this._pomodoroRepository;
  }

  get chatRepository(): IChatRepository {
    return this._chatRepository;
  }

  get solutionRepository(): ISolutionRepository {
    return this._solutionRepository;
  }

  get examRepository(): IExamRepository {
    return this._examRepository;
  }

  get studyPlanRepository(): IStudyPlanRepository {
    return this._studyPlanRepository;
  }

  get badgeRepository(): IBadgeRepository {
    return this._badgeRepository;
  }

  get notificationRepository(): INotificationRepository {
    return this._notificationRepository;
  }

  get userRepository(): IUserRepository {
    return this._userRepository;
  }

  // Service Getters
  get authService(): AuthService {
    return this._authService;
  }

  get pomodoroService(): PomodoroService {
    return this._pomodoroService;
  }

  get chatService(): ChatService {
    return this._chatService;
  }

  get examService(): ExamService {
    return this._examService;
  }

  get studyPlanService(): StudyPlanService {
    return this._studyPlanService;
  }

  get solutionService(): SolutionService {
    return this._solutionService;
  }

  get badgeService(): BadgeService {
    return this._badgeService;
  }

  get notificationService(): NotificationService {
    return this._notificationService;
  }

  get userService(): UserService {
    return this._userService;
  }
}

/**
 * Get service container instance
 */
export function getServiceContainer(): ServiceContainer {
  return ServiceContainer.getInstance();
}

/**
 * Reset service container (for testing)
 */
export function resetServiceContainer(): void {
  ServiceContainer.reset();
}

export { ServiceContainer };
