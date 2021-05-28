import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParametersManagementComponent } from './parameters-management.component';

describe('ParametersManagementComponent', () => {
  let component: ParametersManagementComponent;
  let fixture: ComponentFixture<ParametersManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
