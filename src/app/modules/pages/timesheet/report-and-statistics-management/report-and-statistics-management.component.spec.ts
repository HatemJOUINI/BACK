import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportAndStatisticsManagementComponent } from './report-and-statistics-management.component';

describe('ReportAndStatisticsManagementComponent', () => {
  let component: ReportAndStatisticsManagementComponent;
  let fixture: ComponentFixture<ReportAndStatisticsManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAndStatisticsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAndStatisticsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
