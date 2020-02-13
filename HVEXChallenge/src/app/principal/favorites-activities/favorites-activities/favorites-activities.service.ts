import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Activity } from '../../raffle-activity/raffle-activity/activity';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class FavoritesActivitiesService {

  constructor(private http: HttpClient) {}

  getFavorites(){
    return this.http.get<Activity[]>(`${API}/favorite-activity`)
  }
}
