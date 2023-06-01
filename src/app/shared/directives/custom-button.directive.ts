import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Renderer2,
  Input,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective implements OnChanges {

  @Input() appCustomButtonText = 'default';
  @Output() buttonClicked = new EventEmitter<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2)
  {}

  /**
   * IMPORTANT, le code doit être dans le ngOnChanges et non dans le constructor
   * pour avoir accès à @Input() appCustomButtonText et ses updates sinon le
   * texte sera toujours celui par defaut.
   */
  ngOnChanges(): void {
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText(this.appCustomButtonText);
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(this.el.nativeElement, button);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.buttonClicked.emit();
  }
}
