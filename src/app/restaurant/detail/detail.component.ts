import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RestaurantService} from "../services/restaurant.service";

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
    private resService: RestaurantService,
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.dishes = this.resService.getFood(+params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  backWithRouter(): void {
    this.router.navigate(['/list']).then();
  }
}
