import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestaurantModel} from "../models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceApi {

  constructor(private http: HttpClient) { }

  getMock(): Observable<Array<RestaurantModel>> {
    return this.http.get<Array<RestaurantModel>>('https://run.mocky.io/v3/76192595-0c3c-4eb6-ae36-4f8370fde8f7');
  }
}
