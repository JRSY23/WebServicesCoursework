import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePenaltyComponent } from './create-penalty.component';

describe('CreatePenaltyComponent', () => {
  let component: CreatePenaltyComponent;
  let fixture: ComponentFixture<CreatePenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
