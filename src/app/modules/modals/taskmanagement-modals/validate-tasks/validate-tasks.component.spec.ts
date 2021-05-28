import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidateTasksComponent } from './validate-tasks.component';

describe('ValidateTasksComponent', () => {
  let component: ValidateTasksComponent;
  let fixture: ComponentFixture<ValidateTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
