import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDescriptionComponent } from './role-description.component';

describe('RoleDescriptionComponent', () => {
  let component: RoleDescriptionComponent;
  let fixture: ComponentFixture<RoleDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDescriptionComponent]
    });
    fixture = TestBed.createComponent(RoleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
