import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from './header/header.component';
import { RaffleActivityComponent } from './raffle-activity/raffle-activity.component';
import { FavoritesActivitiesComponent } from './favorites-activities/favorites-activities.component';
import { AlertModule } from '../share/alert/alert.module';
import { DropdownActionsModule } from '../share/dropdown-actions/dropdown-actions.module';
import { ModalModule } from '../share/modal/modal.module';
import { TitleModule } from '../share/title/title.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent,
    RaffleActivityComponent,
    FavoritesActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    DropdownActionsModule,
    ModalModule,
    TitleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PrincipalModule { }
