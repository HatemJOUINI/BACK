import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignedUsersToTeamComponent } from './assigned-users-to-team.component';

describe('AssignedUsersToTeamComponent', () => {
  let component: AssignedUsersToTeamComponent;
  let fixture: ComponentFixture<AssignedUsersToTeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedUsersToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedUsersToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
