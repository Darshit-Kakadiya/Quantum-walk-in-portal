import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppliedJobService {
  jobsApplied: any[] = [];

  constructor() {}

  applyJob(job: any) {
    this.jobsApplied.push(job);
    console.log(this.jobsApplied);
  }
  getAppliedJobs() {
    return this.jobsApplied;
  }
}
