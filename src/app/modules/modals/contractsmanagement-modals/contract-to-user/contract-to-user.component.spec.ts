import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractToUserComponent } from './contract-to-user.component';

describe('ContractToUserComponent', () => {
  let component: ContractToUserComponent;
  let fixture: ComponentFixture<ContractToUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractToUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
