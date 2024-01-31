import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnContentComponent } from './learn-content.component';

describe('LearnContentComponent', () => {
  let component: LearnContentComponent;
  let fixture: ComponentFixture<LearnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
