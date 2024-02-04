import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './register/login/login.component';
import { SignupComponent } from './register/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

export const routes: Routes = [
    { path: 'landing', component: LandingPageComponent },
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
];
