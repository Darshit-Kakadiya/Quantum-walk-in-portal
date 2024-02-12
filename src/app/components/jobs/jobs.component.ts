import { Component, inject } from '@angular/core';
import { Jobs } from 'src/app/interfaces/jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  jobServices: JobsService = inject(JobsService);
  jobs: Jobs[] = [];
  constructor() {
    this.jobs = this.jobServices.getAllJobs();
  }
}
