import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FavoritesActivitiesService } from './favorites-activities/favorites-activities.service';
import { AlertService } from 'src/app/share/alert/alert.service';
import { Activity } from '../raffle-activity/raffle-activity/activity';

@Component({
  selector: 'app-favorites-activities',
  templateUrl: './favorites-activities.component.html'
})
export class FavoritesActivitiesComponent implements OnInit {

  favorites:Activity[] = [];

  constructor(
    private favoritesAcitivies: FavoritesActivitiesService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites(){
    this.favorites = JSON.parse(
      localStorage.getItem('Activity')
    );
    console.log(this.favorites)
  }

}
