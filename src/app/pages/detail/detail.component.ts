import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RestaurantServiceService} from "../../services/restaurant-service.service";

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy {

  dishes: Array<string> = [];
  private routeSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resService: RestaurantServiceService,
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.dishes = this.resService.getFood(+params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  backWithHistory(): void {
    history.back();
  }

  backWithRouter(): void {
    this.router.navigate(['/list']).then();
  }
}
