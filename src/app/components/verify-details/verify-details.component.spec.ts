import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDetailsComponent } from './verify-details.component';

describe('VerifyDetailsComponent', () => {
  let component: VerifyDetailsComponent;
  let fixture: ComponentFixture<VerifyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyDetailsComponent]
    });
    fixture = TestBed.createComponent(VerifyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
