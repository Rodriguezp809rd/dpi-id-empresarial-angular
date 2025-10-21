import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingContainerComponent } from './onboarding-container.component';

describe('OnboardingContainerComponent', () => {
  let component: OnboardingContainerComponent;
  let fixture: ComponentFixture<OnboardingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
