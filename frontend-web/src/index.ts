/**
 * Main Entry Point Exports
 *
 * This file re-exports all the important modules from the Onion Architecture
 * for easy importing throughout the application.
 */

// Core Layer - Domain Models & Types
export * from './core/entities';

// Application Layer - Business Logic
export * from './application';

// Infrastructure Layer - External Dependencies
export * from './infrastructure';

// Presentation Layer - UI Components & Hooks
export * from './presentation/hooks';

// Service Container
export { getServiceContainer, resetServiceContainer, ServiceContainer } from './infrastructure/service-container';
