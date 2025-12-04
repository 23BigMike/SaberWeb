import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import{Tests} from './pages/tests/tests'


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contacto', component: Contact },
  { path: 'Simulacros', component: Tests },
  { path: '**', redirectTo: '' }
];
