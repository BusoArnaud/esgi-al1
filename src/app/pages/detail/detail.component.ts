import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  dishes: Array<string>;
  constructor(
    private router: Router
  ) {
    this.dishes = history.state.data;
  }

  backWithHistory(): void {
    history.back();
  }

  backWithRouter(): void {
    this.router.navigate(['/list']).then();
  }
}
