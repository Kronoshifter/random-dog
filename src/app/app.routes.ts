import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service'

export const routes: Routes = [
  { path: 'login', title: 'Login', component: LoginComponent },
  {
    path: '',
    canActivate: [SessionService],
    children: [
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: '**', redirectTo: '/home' },
    ],
  },
  { path: '**', redirectTo: '' },
];
