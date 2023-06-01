import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = 'default';
  @Input() color: string = 'grey';
  @Output() buttonClicked = new EventEmitter<void>();

  emitEvent(): void {
    this.buttonClicked.emit();
  }

}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule]
})
export class ButtonModule {}
