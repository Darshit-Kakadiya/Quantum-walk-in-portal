class JobPost {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  locationId: number;
  jobRoleIds: number[];
  timeSlotIds: number[];
  generalInstructions: string;
  examInstructions: string;
  minimumRequirements: string;
  process: string;

  constructor(
    id: number,
    title: string,
    startDate: Date,
    endDate: Date,
    locationId: number,
    jobRoleIds: number[],
    timeSlotIds: number[],
    generalInstructions: string,
    examInstructions: string,
    minimumRequirements: string,
    process: string
  ) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.locationId = locationId;
    this.jobRoleIds = jobRoleIds;
    this.timeSlotIds = timeSlotIds;
    this.generalInstructions = generalInstructions;
    this.examInstructions = examInstructions;
    this.minimumRequirements = minimumRequirements;
    this.process = process;
  }
}

class JobLocation {
  id: number;
  address: string;
  area: string;
  city: string;
  state: string;
  zipcode: string;

  constructor(
    id: number,
    address: string,
    area: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    this.id = id;
    this.address = address;
    this.area = area;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }
}

class JobRole {
  id: number;
  name: string;
  salary: string;
  requirements: string;
  description: string;

  constructor(
    id: number,
    name: string,
    salary: string,
    requirements: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.requirements = requirements;
    this.description = description;
  }
}

class TimeSlot {
  id: number;
  startTime: Date;
  endTime: Date;

  constructor(id: number, startTime: Date, endTime: Date) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

export const jobPosts: JobPost[] = [
  new JobPost(
    1,
    'Job Title 1',
    new Date('2024-02-14'),
    new Date('2024-02-20'),
    2,
    [1, 2],
    [2, 3],
    'General instructions 1',
    'Exam instructions 1',
    'Minimum requirements 1',
    'Process 1'
  ),
  new JobPost(
    2,
    'Job Title 2',
    new Date('2024-02-14'),
    new Date('2024-02-20'),
    1,
    [2, 3],
    [1, 2],
    'General instructions 2',
    'Exam instructions 2',
    'Minimum requirements 2',
    'Process 2'
  ),
  new JobPost(
    3,
    'Job Title 3',
    new Date('2024-02-14'),
    new Date('2024-02-20'),
    3,
    [3, 1],
    [3, 1],
    'General instructions 3',
    'Exam instructions 3',
    'Minimum requirements 3',
    'Process 3'
  ),
  new JobPost(
    4,
    'Job Title 4',
    new Date('2024-02-14'),
    new Date('2024-02-20'),
    1,
    [1, 2],
    [2, 3],
    'General instructions 4',
    'Exam instructions 4',
    'Minimum requirements 4',
    'Process 4'
  ),
];

export const jobLocations: JobLocation[] = [
  {
    id: 1,
    address: 'Address 1',
    area: 'Area 1',
    city: 'City 1',
    state: 'State 1',
    zipcode: 'Zipcode 1',
  },
  {
    id: 2,
    address: 'Address 2',
    area: 'Area 2',
    city: 'City 2',
    state: 'State 2',
    zipcode: 'Zipcode 2',
  },
  {
    id: 3,
    address: 'Address 3',
    area: 'Area 3',
    city: 'City 3',
    state: 'State 3',
    zipcode: 'Zipcode 3',
  },
];

export const jobRoles: JobRole[] = [
  {
    id: 1,
    name: 'Role 1',
    salary: 'Package 1',
    requirements: 'Requirements 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Role 2',
    salary: 'Package 2',
    requirements: 'Requirements 2',
    description: 'Description 2',
  },
  {
    id: 3,
    name: 'Role 3',
    salary: 'Package 3',
    requirements: 'Requirements 3',
    description: 'Description 3',
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: 1,
    startTime: new Date('2024-02-14T08:00:00'),
    endTime: new Date('2024-02-14T10:00:00'),
  },
  {
    id: 2,
    startTime: new Date('2024-02-15T08:00:00'),
    endTime: new Date('2024-02-15T10:00:00'),
  },
  {
    id: 3,
    startTime: new Date('2024-02-16T08:00:00'),
    endTime: new Date('2024-02-16T10:00:00'),
  },
];
