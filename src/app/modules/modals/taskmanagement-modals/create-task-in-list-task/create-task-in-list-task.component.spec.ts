import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateTaskInListTaskComponent } from './create-task-in-list-task.component';

describe('CreateTaskInListTaskComponent', () => {
  let component: CreateTaskInListTaskComponent;
  let fixture: ComponentFixture<CreateTaskInListTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskInListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskInListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
