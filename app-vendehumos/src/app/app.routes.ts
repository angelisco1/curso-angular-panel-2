import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { NuevoVendehumoComponent } from "./pages/nuevo-vendehumo/nuevo-vendehumo.component";


const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent }
]

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES)