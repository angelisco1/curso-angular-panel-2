import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Tema01DataBindingComponent } from './tema01-data-binding/tema01-data-binding.component';
import { Tema02InputComponent } from './tema02-input/tema02-input.component';
import { SugusComponent } from './tema02-input/sugus/sugus.component';
import { ProductoComponent } from './tema02-input/producto/producto.component';
import { Tema03ReferenciasComponent } from './tema03-referencias/tema03-referencias.component';
import { Tema04PipesComponent } from './tema04-pipes/tema04-pipes.component';
import { SumaPipe } from './tema04-pipes/pipes/suma.pipe';
import { OcultarPalabrasPipe } from './tema04-pipes/pipes/ocultar-palabras.pipe';
import { Tema05DirectivasComponent } from './tema05-directivas/tema05-directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Tema01DataBindingComponent,
    Tema02InputComponent,
    SugusComponent,
    ProductoComponent,
    Tema03ReferenciasComponent,
    Tema04PipesComponent,
    SumaPipe,
    OcultarPalabrasPipe,
    Tema05DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
