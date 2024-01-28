import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCommonComponent } from './lesson-common.component';

describe('LessonCommonComponent', () => {
  let component: LessonCommonComponent;
  let fixture: ComponentFixture<LessonCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonCommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
