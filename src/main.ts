/*
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/

/*
import { ComponentName1Component } from './app/component-name1/component-name1.component';
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
import { provideRouter, withComponentInputBinding  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig, importProvidersFrom  } from '@angular/core';
import { AppComponent } from './app/app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: AppComponent },
    ], withComponentInputBinding()),
    importProvidersFrom(FormsModule)
  ]
};
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
