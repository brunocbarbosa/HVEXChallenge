import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AlertService } from 'src/app/share/alert/alert.service';
import { Activity } from '../raffle-activity/raffle-activity/activity';

@Component({
  selector: 'app-favorites-activities',
  templateUrl: './favorites-activities.component.html'
})
export class FavoritesActivitiesComponent implements OnInit {

  favorites:Activity[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites(){
    if(localStorage.getItem('Activity') === null){
      this.favorites = [];
    }else{
      this.favorites = JSON.parse(
        localStorage.getItem('Activity')
      );
    }

  }

  deleteFavorites(){
    localStorage.clear();
    this.getFavorites()
    this.alertService.success('Favorites deleted!!', true);
  }

}
