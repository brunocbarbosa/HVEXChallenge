import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { RaffleActivityService } from './raffle-activity/raffle-activity.service';
import { Activity } from './raffle-activity/activity';
import { AlertService } from 'src/app/share/alert/alert.service';


@Component({
  selector: 'app-raffle-activity',
  templateUrl: './raffle-activity.component.html'
})
export class RaffleActivityComponent implements OnInit {

  activity: Activity;
  activityForm: FormGroup;
  local: Activity[] = []

  constructor(
    private raffleActivityService: RaffleActivityService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    //formbuilder the get the activity type
    this.activityForm = this.formBuilder.group({
      type: ['']
    })
  }

  //This function will get a random activity
  raffleAnActivity(){
    this.raffleActivityService.getRandomActivity().subscribe(
      activity => this.activity = activity
    );
  }

  //This function will get a random activity with the type sended by parameter
  raffleByType(){
    this.raffleActivityService.getRandomActivityByType(this.activityForm.value.type)
      .subscribe(
        activity => this.activity = activity
    )
  }

  //Favorite
  //Save to localStorage
  saveLocalStorage(){
    if(localStorage.getItem('Activity') === null){
      this.local = [];
    }else{
      this.local = JSON.parse(
        localStorage.getItem('Activity')
      );
    }

    this.local.push(this.activity)
    localStorage.setItem(
      'Activity',
      JSON.stringify(this.local)
    )
  }

}
