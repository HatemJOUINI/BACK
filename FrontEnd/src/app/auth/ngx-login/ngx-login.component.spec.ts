import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxLoginComponent } from './ngx-login.component';

describe('NgxLoginComponent', () => {
  let component: NgxLoginComponent;
  let fixture: ComponentFixture<NgxLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
