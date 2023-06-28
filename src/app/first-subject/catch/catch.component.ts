import {Component, OnDestroy} from '@angular/core';
import {HandleService} from "../handle.service";
import {map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss'],
  standalone: true,
  imports: [AsyncPipe]
})

export class CatchComponent {

  counterSub$: Observable<number>;

  constructor(
    private handleService: HandleService
  ) {
    this.counterSub$ = this.handleService.counter$
      .pipe(
        map(val => val * 2)
      )
  }

}
