import { Component } from '@angular/core';
import {HandleService} from "../handle.service";
import {ButtonModule} from "../../components/button/button.component";

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.scss'],
  standalone: true,
  imports: [ButtonModule]
})
export class EmitComponent {

  constructor(
    private handleService: HandleService
  ) {
  }

  addOne() {
    this.handleService.addOne();
  }

  reset(): void {
    this.handleService.reset();
  }

}
