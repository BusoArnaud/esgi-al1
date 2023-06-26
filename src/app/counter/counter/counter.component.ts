import { Component } from '@angular/core';
import {ButtonModule} from "../../components/button/button.component";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [ButtonModule, SharedModule]
})
export class CounterComponent {

  counter: number = 0;

  add(): void {
    this.counter++;
  }

  minus(): void {
    this.counter--;
  }

  clear(): void {
    this.counter = 0;
  }

}
