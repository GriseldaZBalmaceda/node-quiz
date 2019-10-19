import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCarouselDialogComponent } from './quiz-carousel-dialog.component';

describe('QuizCarouselDialogComponent', () => {
  let component: QuizCarouselDialogComponent;
  let fixture: ComponentFixture<QuizCarouselDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCarouselDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCarouselDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
