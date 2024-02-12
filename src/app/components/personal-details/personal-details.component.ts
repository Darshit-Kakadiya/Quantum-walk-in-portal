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
    // Add more job roles as needed
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
      formControls[role.value] = false; // Initialize as false
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
      ...formControls, // Spread form controls for job roles
    });
  }

  onSubmit(): void {
    const formData = this.registrationForm.value;
    // Extract selected job roles from form data
    const selectedJobRoles = this.jobRoles
      .filter((role) => formData[role.value])
      .map((role) => role.label);

    // Add selected job roles to form data
    formData['selectedJobRoles'] = selectedJobRoles;

    // Store or process the form data
    this.registrationDataService.storeData(formData);

    // Reset form after submission
    this.registrationForm.reset();
  }
}
