import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = 'default';
  @Input() color: string = 'grey';
  @Input() disabled: boolean = false;
  @Output() buttonClicked = new EventEmitter<void>();

  emitEvent(): void {
    this.buttonClicked.emit();
  }

}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, MatButtonModule]
})
export class ButtonModule {}
