import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiesaccountingViewComponent } from './penaltiesaccounting-view.component';

describe('PenaltiesaccountingViewComponent', () => {
  let component: PenaltiesaccountingViewComponent;
  let fixture: ComponentFixture<PenaltiesaccountingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltiesaccountingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiesaccountingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
