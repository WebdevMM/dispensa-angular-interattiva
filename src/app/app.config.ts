import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; // Assicurati che questa importazione sia presente

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()] // Assicurati che provideAnimations() sia incluso nell'array providers
};