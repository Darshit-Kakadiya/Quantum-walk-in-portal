import { Injectable } from '@angular/core';
import { Jobs } from '../interfaces/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs: Jobs[] = [
    {
      title: 'Frontend Developer',
      id: 1,
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-15'),
      location: 'London',
      jobRoles: [
        {
          id: 1,
          name: 'Frontend Developer',
          package: 50000,
          description: 'Frontend Developer',
          requirements: 'Frontend Developer',
        },
        {
          id: 2,
          name: 'Backend Developer',
          package: 60000,
          description: 'Backend Developer',
          requirements: 'Backend Developer',
        },
      ],
      instructions: 'Instructions',
      requirements: 'Requirements',
      process: 'Process',
    },
    {
      title: 'Backend Developer',
      id: 2,
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-15'),
      location: 'Manchester',
      jobRoles: [
        {
          id: 1,
          name: 'Frontend Developer',
          package: 50000,
          description: 'Frontend Developer',
          requirements: 'Frontend Developer',
        },
        {
          id: 2,
          name: 'Backend Developer',
          package: 60000,
          description: 'Backend Developer',
          requirements: 'Backend Developer',
        },
      ],
      instructions: 'Instructions',
      requirements: 'Requirements',
      process: 'Process',
    },
    {
      title: 'Fullstack Developer',
      id: 3,
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-15'),
      location: 'Birmingham',
      jobRoles: [
        {
          id: 1,
          name: 'Frontend Developer',
          package: 50000,
          description: 'Frontend Developer',
          requirements: 'Frontend Developer',
        },
        {
          id: 2,
          name: 'Backend Developer',
          package: 60000,
          description: 'Backend Developer',
          requirements: 'Backend Developer',
        },
      ],
      instructions: 'Instructions',
      requirements: 'Requirements',
      process: 'Process',
    },
    {
      title: 'DevOps Engineer',
      id: 4,
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-15'),
      location: 'Leeds',
      jobRoles: [
        {
          id: 1,
          name: 'Frontend Developer',
          package: 50000,
          description: 'Frontend Developer',
          requirements: 'Frontend Developer',
        },
        {
          id: 2,
          name: 'Backend Developer',
          package: 60000,
          description: 'Backend Developer',
          requirements: 'Backend Developer',
        },
      ],
      instructions: 'Instructions',
      requirements: 'Requirements',
      process: 'Process',
    },
  ];

  getAllJobs() {
    return this.jobs;
  }
  getJobById(jobId: number) {
    return this.jobs.filter((job) => job.id === jobId);
  }
  constructor() {}
}
