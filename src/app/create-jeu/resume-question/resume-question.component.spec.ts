import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeQuestionComponent } from './resume-question.component';

describe('ResumeQuestionComponent', () => {
  let component: ResumeQuestionComponent;
  let fixture: ComponentFixture<ResumeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
