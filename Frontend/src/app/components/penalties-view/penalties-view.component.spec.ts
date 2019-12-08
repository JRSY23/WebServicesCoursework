import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiesViewComponent } from './penalties-view.component';

describe('PenaltiesViewComponent', () => {
  let component: PenaltiesViewComponent;
  let fixture: ComponentFixture<PenaltiesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltiesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
