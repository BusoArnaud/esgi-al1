import { Component } from '@angular/core';
import {EmitComponent} from "./emit/emit.component";
import {CatchComponent} from "./catch/catch.component";

@Component({
  selector: 'app-first-subject',
  templateUrl: './first-subject.component.html',
  styleUrls: ['./first-subject.component.scss'],
  standalone: true,
  imports: [EmitComponent, CatchComponent]
})
export class FirstSubjectComponent {

}
