import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Activity } from './activity';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class RaffleActivityService {

  constructor(private http: HttpClient){}

  getRandomActivity(){
    return this.http.get<Activity>(`${API}/random-activity`)
  }

  getRandomActivityByType(key){
    return this.http.get<Activity>(`${API}/activity-type/${key}`)
  }
}
