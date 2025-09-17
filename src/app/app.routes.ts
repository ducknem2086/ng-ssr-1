import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: "",
  children: [{
    path: "page1",
    loadComponent: () => import('./pages/page1/page1').then(c => c.Page1)
  }]
}];
