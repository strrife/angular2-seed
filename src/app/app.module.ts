import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BindingsComponent } from './bindings/bindings.component';
import { HomeComponent } from './home/home.component';
// import { AwesomeSvgComponent } from './svg/awesome-svg.component';
import { BindingExampleComponent } from './bindings/binding-example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutComponent,
    BindingsComponent,
    HomeComponent,
    BindingExampleComponent,
    // AwesomeSvgComponent
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
