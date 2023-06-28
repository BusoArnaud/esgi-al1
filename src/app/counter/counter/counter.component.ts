import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonModule} from "../../components/button/button.component";
import {SharedModule} from "../../shared/shared.module";
import {Store} from "@ngrx/store";
import * as CounterActions from "../store/counter.actions";
import {Observable} from "rxjs";
import {selectCounterValue} from "../store/counter.selectors";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, SharedModule, AsyncPipe]
})
export class CounterComponent {

  counter$: Observable<number>

  constructor(
    private store: Store,
  ) {
    this.counter$ = this.store.select(selectCounterValue)
  }

  add(): void {
    this.store.dispatch(CounterActions.add());
  }

  minus(): void {
    this.store.dispatch(CounterActions.minus());
  }

  clear(): void {
    this.store.dispatch(CounterActions.reset());
  }

}
