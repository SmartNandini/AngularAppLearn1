
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};


/*
import { ComponentName1Component } from '../app/component-name1/component-name1.component';
import { provideRouter, withComponentInputBinding  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig, importProvidersFrom  } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: ComponentName1Component },
    ], withComponentInputBinding()),
    importProvidersFrom(FormsModule)
  ]
};
*/
/*
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentName1Component } from '../app/component-name1/component-name1.component';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: AppComponent }, // Default route
      { path: 'comp1', component: ComponentName1Component  } // New route
    ], withComponentInputBinding()),
    importProvidersFrom(FormsModule)
  ]
};
*/