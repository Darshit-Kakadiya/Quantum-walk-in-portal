import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppliedJobService } from 'src/app/services/applied-job.service';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  panelOpenState = false;
  jobService: JobsService = inject(JobsService);
  appliedJobService: AppliedJobService = inject(AppliedJobService);

  selectedJobRoles: number[] = [];
  selectedTimeSlotId: number | undefined;
  id: number = -1;
  job: any;
  alreadyApplied: any;

  constructor() {
    this.getJobPost();
    this.checkIfAlreadyApplied();
  }
  getJobPost() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.jobService.getJobById(this.id).subscribe((jobPost: any) => {
      this.job = jobPost;
    });
  }
  checkIfAlreadyApplied() {
    this.alreadyApplied = this.appliedJobService.getApplicationDetails(this.id);
  }
  onJobRoleSelectionChange(event: any, jobRoleId: number): void {
    if (event.checked) {
      this.selectedJobRoles.push(jobRoleId);
    } else {
      this.selectedJobRoles = this.selectedJobRoles.filter(
        (id: number) => id !== jobRoleId
      );
    }
  }

  apply() {
    if (this.selectedTimeSlotId && this.selectedJobRoles.length > 0) {
      this.appliedJobService.applyJob({
        id: this.job.id,
        jobRoles: this.selectedJobRoles,
        timeSlotId: this.selectedTimeSlotId,
      });
    } else {
      console.log('Please select time slot and job role');
    }
  }
}
