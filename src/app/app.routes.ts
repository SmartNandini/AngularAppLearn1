import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentName1Component } from './component-name1/component-name1.component';

export const routes: Routes = [
    //{'path': '', component: AppComponent},
    //{'path': '', component: AboutComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'contact', component: ContactComponent},
    {'path': 'comp1', component: ComponentName1Component},
];
