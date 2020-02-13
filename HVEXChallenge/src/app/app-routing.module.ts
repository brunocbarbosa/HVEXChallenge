import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { RaffleActivityComponent } from './principal/raffle-activity/raffle-activity.component';
import { FavoritesActivitiesComponent } from './principal/favorites-activities/favorites-activities.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'principal'
  },
  {
    path: 'principal',
    component:PrincipalComponent,
    children: [
      {
        path: '',
        component: RaffleActivityComponent
      },
      {
        path: 'favorites',
        component: FavoritesActivitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
