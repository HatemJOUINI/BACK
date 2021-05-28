import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContractRateComponent } from './list-contract-rate.component';

describe('ListContractRateComponent', () => {
  let component: ListContractRateComponent;
  let fixture: ComponentFixture<ListContractRateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContractRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
