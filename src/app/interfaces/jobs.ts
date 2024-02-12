export interface Jobs {
  title: any;
  id: number;
  startDate: Date;
  endDate: Date;
  location: string;
  jobRoles: jobRole[];
  instructions: string;
  requirements: string;
  process: string;
}

interface jobRole {
  id: number;
  name: string;
  package: number;
  description: string;
  requirements: string;
}
