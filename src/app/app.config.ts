import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), //added to make http requests to external web service to get data
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
