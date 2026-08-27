import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Tu landing page principal (ajusta según tengas estructurado tu router)
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'politica-cookies', component: PoliticaCookiesComponent },
  { path: '**', redirectTo: '' } // Redirección por defecto si la ruta no existe
];