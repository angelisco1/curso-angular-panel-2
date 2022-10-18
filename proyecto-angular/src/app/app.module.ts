import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Tema01DataBindingComponent } from './tema01-data-binding/tema01-data-binding.component';
import { Tema02InputComponent } from './tema02-input/tema02-input.component';
import { SugusComponent } from './tema02-input/sugus/sugus.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Tema01DataBindingComponent,
    Tema02InputComponent,
    SugusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
