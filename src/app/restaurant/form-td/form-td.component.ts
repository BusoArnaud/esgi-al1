import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {RestaurantService} from "../services/restaurant.service";

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTDComponent {

  restaurantTitle: string = 'New';
  restaurantDescription: string = '';

  alreadyExist = false;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {
  }
  submitRestaurant() {
    if (this.restaurantService.canCreateRestaurant(this.restaurantTitle) < 0 ) {
      this.restaurantService.addNewRestaurant(
        {title: this.restaurantTitle, desc: this.restaurantDescription, food: []}
      );
    } else {
      this.alreadyExist = true;
    }
  }

}
