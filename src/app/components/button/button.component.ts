import {Component, EventEmitter, Input, Output} from '@angular/core';

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
