import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from './header/header.component';
import { RaffleActivityComponent } from './raffle-activity/raffle-activity.component';
import { FavoritesActivitiesComponent } from './favorites-activities/favorites-activities.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent,
    RaffleActivityComponent,
    FavoritesActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
