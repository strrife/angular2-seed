import { Routes } from '@angular/router';

import { SvgExampleComponent } from './svg/svg.component';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { ServiceExampleComponent } from './services/service-example.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bindings', component: BindingsComponent },
  { path: 'services', component: ServiceExampleComponent },
  { path: 'transclude', component: TransclusionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'svg', component: SvgExampleComponent }
];

