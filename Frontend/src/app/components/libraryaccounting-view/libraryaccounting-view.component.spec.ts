import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryaccountingViewComponent } from './libraryaccounting-view.component';

describe('LibraryaccountingViewComponent', () => {
  let component: LibraryaccountingViewComponent;
  let fixture: ComponentFixture<LibraryaccountingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryaccountingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryaccountingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
