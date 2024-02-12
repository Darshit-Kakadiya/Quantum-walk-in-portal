import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/interfaces/jobs';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number = -1;

  panelOpenState = false;

  jobService: JobsService = inject(JobsService);
  job: Jobs[] = [];
  selectedTimeSlot: any;
  timeSlot: any;
  constructor() {
    console.log(this.route);
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });

    this.job = this.jobService.getJobById(this.id);
  }
}
