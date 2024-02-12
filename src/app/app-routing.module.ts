import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegistrationPageComponent,
  },
  {
    path: 'jobs',
    title: 'Jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs/:id',
    title: 'Job Details',
    component: JobDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
