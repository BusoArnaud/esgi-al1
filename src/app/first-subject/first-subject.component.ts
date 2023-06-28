import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EmitComponent} from "./emit/emit.component";
import {CatchComponent} from "./catch/catch.component";

@Component({
  selector: 'app-first-subject',
  templateUrl: './first-subject.component.html',
  styleUrls: ['./first-subject.component.scss'],
  standalone: true,
  imports: [
    CatchComponent,
    EmitComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FirstSubjectComponent {}
