import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/interfaces/jobs';
import { AppliedJobService } from 'src/app/services/applied-job.service';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number = -1;

  jobApplied = {
    id: this.id,
    timeSlotId: '',
    jobroleId: [],
  };

  panelOpenState = false;
  job = {};
  jobRoleIds = [];

  constructor(appliedJobService: AppliedJobService, jobService: JobsService) {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    jobService.getJobById(this.id).forEach((job) => {
      this.job = job;
      console.log(job);
    });
  }
  apply() {}
}
