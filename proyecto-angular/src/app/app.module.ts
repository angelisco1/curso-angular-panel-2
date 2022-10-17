import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Tema01DataBindingComponent } from './tema01-data-binding/tema01-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Tema01DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
