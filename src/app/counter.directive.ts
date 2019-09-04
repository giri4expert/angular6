import { Directive, Input, SimpleChanges, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appcounter]'
})
export class CounterDirective {

  @Input("appcounterOf")
  counter:number[]

  constructor(private container:ViewContainerRef, 
    private template: TemplateRef<Object>) { }

  ngOnChanges(changes: SimpleChanges){
    // console.log('change Detected', this.counter)
    this.container.clear()
    this.counter.forEach( e => {
      this.container.createEmbeddedView(this.template, new CounterContext(e) )
    })
  }

}

class CounterContext{

  constructor(public $implicit:any){

  }

}
