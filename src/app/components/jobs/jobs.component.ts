import { Component, inject } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  jobServices: JobsService = inject(JobsService);
  jobs: any[] = [];
  constructor() {
    this.jobServices.getAllJobs().subscribe((jobs: any[]) => {
      this.jobs = jobs;
    });
  }
}
