import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoleDescriptionComponent } from './components/role-description/role-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { QualificationDetailsComponent } from './components/qualification-details/qualification-details.component';
import { VerifyDetailsComponent } from './components/verify-details/verify-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    JobDetailsComponent,
    JobsComponent,
    NotFoundComponent,
    RoleDescriptionComponent,
    RegistrationPageComponent,
    PersonalDetailsComponent,
    QualificationDetailsComponent,
    VerifyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: '' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
