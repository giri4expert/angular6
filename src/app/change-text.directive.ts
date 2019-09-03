import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.innerText = "This is from Directive "
  }

}
