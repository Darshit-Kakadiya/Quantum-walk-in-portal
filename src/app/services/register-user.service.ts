import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  private registrationData: any[] = [];

  constructor() {}

  storeData(data: any): void {
    console.log(data);
    this.registrationData.push(data);
  }

  getStoredData(): any[] {
    return this.registrationData;
  }
}
