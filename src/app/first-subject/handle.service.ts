import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  counter = 0;
  counter$= new BehaviorSubject<number>(this.counter);

  addOne() {
    this.counter += 1;
    this.counter$.next(this.counter);
  }

  reset(): void {
    this.counter = 0;
    this.counter$.next(this.counter);
  }
}
