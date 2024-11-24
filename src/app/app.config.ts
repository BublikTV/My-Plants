import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserAnimationsModule, // Wymagane dla animacji Angular Material
      MatToolbarModule,
      MatButtonModule
    ), provideAnimationsAsync()
  ]
};
