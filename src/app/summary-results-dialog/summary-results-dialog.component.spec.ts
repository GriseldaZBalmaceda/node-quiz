import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryResultsDialogComponent } from './summary-results-dialog.component';

describe('SummaryResultsDialogComponent', () => {
  let component: SummaryResultsDialogComponent;
  let fixture: ComponentFixture<SummaryResultsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryResultsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
