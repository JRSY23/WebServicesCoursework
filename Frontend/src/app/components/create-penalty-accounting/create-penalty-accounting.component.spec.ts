import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePenaltyAccountingComponent } from './create-penalty-accounting.component';

describe('CreatePenaltyAccountingComponent', () => {
  let component: CreatePenaltyAccountingComponent;
  let fixture: ComponentFixture<CreatePenaltyAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePenaltyAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePenaltyAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
