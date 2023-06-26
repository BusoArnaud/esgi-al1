import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  counter = 0;
  counter$= new Subject<number>();

  addOne() {
    this.counter += 1;
    this.counter$.next(this.counter);
  }
}
