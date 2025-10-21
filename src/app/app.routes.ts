import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'business-flow',
        pathMatch: 'full',
      },
      {
        path: 'business-flow',
        loadComponent: () =>
          import(
            './features/business-flow/onboarding-container/onboarding-container.component'
          ).then((m) => m.OnboardingContainerComponent),
      },
    ],
  },
];
