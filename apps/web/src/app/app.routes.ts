import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    loadComponent: () => import('@nx-jneal/feature-home').then((m) => m.FeatureHomeComponent),
    path: '',
  },
  {
    loadComponent: () => import('@nx-jneal/feature-codes').then((m) => m.FeatureCodesComponent),
    path: 'codes',
  },
  {
    loadComponent: () => import('@nx-jneal/feature-travels').then((m) => m.FeatureTravelsComponent),
    path: 'travels',
  },
  {
    loadComponent: () => import('@nx-jneal/feature-games').then((m) => m.FeatureGamesComponent),
    path: 'games',
  },
];
