import { Component } from '@angular/core';
import {RestaurantService} from "./restaurant/services/restaurant.service";
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import * as RestaurantActions from "../app/store/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private restaurantService: RestaurantService,
    private translate: TranslateService,
    private store: Store,
  ) {
    // this.restaurantService.getRestaurants();
    this.store.dispatch(RestaurantActions.getRestaurants());
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  lang(lg: string) {
    this.translate.use(lg);
  }
}
