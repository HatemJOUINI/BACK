import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReleasemanagementComponent } from './releasemanagement.component';

describe('ReleasemanagementComponent', () => {
  let component: ReleasemanagementComponent;
  let fixture: ComponentFixture<ReleasemanagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
