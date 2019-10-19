import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CummulativeSummaryComponent } from './cummulative-summary.component';

describe('CummulativeSummaryComponent', () => {
  let component: CummulativeSummaryComponent;
  let fixture: ComponentFixture<CummulativeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CummulativeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CummulativeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
