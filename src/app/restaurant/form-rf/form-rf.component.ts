import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantService} from "../services/restaurant.service";

@Component({
  selector: 'app-form-rf',
  templateUrl: './form-rf.component.html',
  styleUrls: ['../form-td/form-td.component.scss']
})
export class FormRFComponent {

  restaurantForm = new FormGroup({
    restaurantTitleControl: new FormControl('', [Validators.required]),
    restaurantDescriptionControl: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
  ) {
  }

  saveRestaurant() {
    if (this.restaurantService.canCreateRestaurant(this.restaurantForm.controls.restaurantTitleControl.value) < 0 ) {
      this.restaurantService.addNewRestaurant(
        {
          title: (this.restaurantForm.controls.restaurantTitleControl.value) as string,
          desc: (this.restaurantForm.controls.restaurantDescriptionControl.value) as string,
          food: []
        }
      );
    }
  }

}
