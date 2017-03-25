import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './bindings/bindings.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bindings', component: BindingsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

