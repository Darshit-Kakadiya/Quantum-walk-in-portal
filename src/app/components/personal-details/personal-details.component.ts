import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  registrationForm!: FormGroup;

  jobRoles = [
    { label: 'Software Developer', value: 'softwareDeveloper' },
    { label: 'UX/UI Designer', value: 'uxUiDesigner' },
    { label: 'Project Manager', value: 'projectManager' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registrationDataService: RegisterUserService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    const formControls: { [key: string]: boolean } = {};
    this.jobRoles.forEach((role) => {
      formControls[role.value] = false;
    });

    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      resume: ['', Validators.required],
      portfolioUrl: [''],
      referredBy: [''],
      sendJobUpdates: [false],
      ...formControls,
    });
  }

  onSubmit(): void {
    const formData = this.registrationForm.value;
    const selectedJobRoles = this.jobRoles
      .filter((role) => formData[role.value])
      .map((role) => role.label);

    formData['selectedJobRoles'] = selectedJobRoles;

    this.registrationDataService.storePersonalData(formData);

    this.registrationForm.reset();
  }
}
