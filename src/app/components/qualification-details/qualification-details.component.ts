import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.scss'],
})
export class QualificationDetailsComponent implements OnInit {
  educationPanelOpenState = false;
  experience = '';
  ProfessionalQualification = {};
  registrationForm!: FormGroup;
  ExperienceForm!: FormGroup;
  technologies = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Angular JS', value: 'Angular JS' },
    { label: 'React', value: 'React' },
    { label: 'Node JS', value: 'Node JS' },
    { label: 'Others', value: 'Others' },
  ];
  Experiencedtechnologies = [
    { label: 'Javascript', value: 'Javascript' },
    { label: 'Angular JS', value: 'Angular JS' },
    { label: 'React', value: 'React' },
    { label: 'Node JS', value: 'Node JS' },
    { label: 'Others', value: 'Others' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registrationDataService: RegisterUserService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.formBuilder.group({
      // Educational Qualifications
      aggregatePercentage: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      qualification: ['', Validators.required],
      stream: ['', Validators.required],
      college: ['', Validators.required],
      otherCollege: [''],
      collegeLocation: ['', Validators.required],
      // Professional Qualifications
      applicantType: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.registrationDataService.storeQualificationData(formData);
      this.registrationForm.reset();
    } else {
    }
  }
  onApplicantTypeChange($event: { value: string }): void {
    this.experience = $event.value;
    if ($event.value === 'Fresher') {
      const formControls: { [key: string]: boolean } = {};
      this.technologies.forEach((technology) => {
        formControls[technology.value] = false; // Initialize as false
      });
      this.ExperienceForm = this.formBuilder.group({
        otherTechnologies: [''],
        appearedForTest: ['', Validators.required],
        appliedRole: [''],
        ...formControls,
      });
    } else if ($event.value === 'Experienced') {
      const formControls: { [key: string]: boolean } = {};
      this.technologies.forEach((technology) => {
        formControls[technology.value] = false; // Initialize as false
      });
      const experience: { [key: string]: boolean } = {};
      this.Experiencedtechnologies.forEach((technology) => {
        formControls[technology.value] = false; // Initialize as false
      });
      this.ProfessionalQualification = {
        experienceYears: [''],
        currentCTC: [''],
        expectedCTC: [''],
        onNoticePeriod: [''],
        noticePeriodEndDate: [''],
        noticePeriodLength: [''],
        appearedForTest: [''],
        appliedRole: [''],
        ...formControls,
        ...experience,
      };
    }
  }
}
