import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoVendehumoComponent } from './pages/nuevo-vendehumo/nuevo-vendehumo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardVendehumoComponent } from './components/card-vendehumo/card-vendehumo.component';
import { FormVendehumoComponent } from './components/form-vendehumo/form-vendehumo.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NuevoVendehumoComponent,
    InicioComponent,
    MenuComponent,
    CardVendehumoComponent,
    FormVendehumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
