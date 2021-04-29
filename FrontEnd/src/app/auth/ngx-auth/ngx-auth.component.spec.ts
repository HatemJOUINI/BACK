import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxAuthComponent } from './ngx-auth.component';

describe('NgxAuthComponent', () => {
  let component: NgxAuthComponent;
  let fixture: ComponentFixture<NgxAuthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
