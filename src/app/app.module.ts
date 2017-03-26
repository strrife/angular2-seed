import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';

import { SvgExampleComponent } from './svg/svg.component';
import { AwesomeSvgComponent } from './svg/awesome-svg.component';

import { BindingsComponent } from './bindings/bindings.component';
import { BindingExampleComponent } from './bindings/binding-example-component.component';

import { TransclusionComponent } from './transclusion/transclusion.component';
import { NgContentExample1Component } from './transclusion/ng-content-example-1.component';
import { NgContentExample2Component } from './transclusion/ng-content-example-2.component';

import { ServiceExampleComponent } from './services/service-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgExampleComponent,
    AwesomeSvgComponent,
    HomeComponent,
    BindingsComponent,
    BindingExampleComponent,
    TransclusionComponent,
    NgContentExample1Component,
    NgContentExample2Component,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
