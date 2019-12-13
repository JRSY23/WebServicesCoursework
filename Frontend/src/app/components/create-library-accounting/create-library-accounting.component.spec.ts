import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibraryAccountingComponent } from './create-library-accounting.component';

describe('CreateLibraryAccountingComponent', () => {
  let component: CreateLibraryAccountingComponent;
  let fixture: ComponentFixture<CreateLibraryAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLibraryAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLibraryAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
