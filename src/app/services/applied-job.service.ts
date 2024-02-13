import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppliedJobService {
  jobsApplied: any[] = [
    {
      id: 1,
      jobRoles: [1, 2],
      timeSlotId: 2,
    },
  ];

  constructor() {}

  applyJob(job: any) {
    this.jobsApplied.push(job);
  }
  getApplicationDetails(jobId: number) {
    return this.jobsApplied.find((job) => job.id == jobId);
  }
}
