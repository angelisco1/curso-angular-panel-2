import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./pages/error/error.component";
import { InfoVendehumoComponent } from "./pages/info-vendehumo/info-vendehumo.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";
import { NuevoVendehumoComponent } from "./pages/nuevo-vendehumo/nuevo-vendehumo.component";


const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent },
  { path: 'vendehumos/:vendehumoId', component: InfoVendehumoComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: ErrorComponent },
]

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES)