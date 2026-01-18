// Infrastructure Layer Export

// API
export { HttpApiService, createApiService, getApiService, resetApiService } from './api/http-api.service';

// Storage
export {
  LocalStorageService,
  SessionStorageService,
  createLocalStorageService,
  createSessionStorageService,
  getLocalStorageService,
  resetLocalStorageService,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
} from './storage/local-storage.service';

// Adapters (Repository Implementations)
export { AuthRepositoryAdapter } from './adapters/auth.repository.adapter';
export { PomodoroRepositoryAdapter } from './adapters/pomodoro.repository.adapter';
export { ChatRepositoryAdapter } from './adapters/chat.repository.adapter';
export { SolutionRepositoryAdapter } from './adapters/solution.repository.adapter';
export { ExamRepositoryAdapter } from './adapters/exam.repository.adapter';
export { StudyPlanRepositoryAdapter } from './adapters/study-plan.repository.adapter';
export { BadgeRepositoryAdapter } from './adapters/badge.repository.adapter';
export { NotificationRepositoryAdapter } from './adapters/notification.repository.adapter';
export { UserRepositoryAdapter } from './adapters/user.repository.adapter';
