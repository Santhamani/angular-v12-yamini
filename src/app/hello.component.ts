import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template:`<div class='card'><p>hello tag is using p</p></div>` ,
  styleUrls: [ './app.component.css' ]
})
export class HelloComponent  {
  @Input() name: string;
}
