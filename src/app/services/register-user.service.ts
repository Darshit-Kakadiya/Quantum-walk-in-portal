import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  private PersonalData = {};
  private QualificationData = {};

  constructor() {}

  storePersonalData(data: any): void {
    this.PersonalData = data;
    console.log(data);
  }
  storeQualificationData(data: any): void {
    console.log(data);
    this.QualificationData = data;
  }

  getStoredPesonalData() {
    return this.PersonalData;
  }
  getStoreQualificationData() {
    return this.QualificationData;
  }
}
