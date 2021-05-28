import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskmanagementComponent } from './taskmanagement.component';

describe('TaskmanagementComponent', () => {
  let component: TaskmanagementComponent;
  let fixture: ComponentFixture<TaskmanagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
