import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class FavoritesActivitiesService {

  constructor(private http: HttpClient) {}

  getFavorites(){
    return JSON.parse(
      localStorage.getItem('Activity')
    );
  }
}
