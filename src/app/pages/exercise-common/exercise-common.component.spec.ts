import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCommonComponent } from './exercise-common.component';

describe('ExerciseCommonComponent', () => {
  let component: ExerciseCommonComponent;
  let fixture: ComponentFixture<ExerciseCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseCommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
