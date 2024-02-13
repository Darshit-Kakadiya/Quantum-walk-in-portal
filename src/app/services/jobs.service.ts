import { Injectable } from '@angular/core';
import { jobPosts, jobRoles, jobLocations, timeSlots } from '../data/jobData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobs: any[] = [];
  constructor() {
    jobPosts.forEach((post) => {
      let jobPost = {
        id: post.id,
        title: post.title,
        startDate: post.startDate,
        endDate: post.endDate,
        location: jobLocations.find(
          (location) => location.id === post.locationId
        ),
        jobRoles: jobRoles.filter((role) => post.jobRoleIds.includes(role.id)),
      };
      this.jobs.push(jobPost);
    });
  }

  getAllJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJobById(id: number): Observable<any[]> {
    let jobPost;
    jobPosts.filter((job) => {
      if (job.id == id) {
        jobPost = {
          id: job.id,
          title: job.title,
          startDate: job.startDate,
          endDate: job.endDate,
          location: jobLocations.find(
            (location) => location.id === job.locationId
          ),
          jobRoles: jobRoles.filter((role) => job.jobRoleIds.includes(role.id)),
          timeSlots: timeSlots.filter((timeslot) =>
            job.timeSlotIds.includes(timeslot.id)
          ),
          generalInstructions: job.generalInstructions,
          process: job.process,
          minimumRequirements: job.minimumRequirements,
        };
      }
    });
    return of(jobPost) as Observable<any>;
  }
}
