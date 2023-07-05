import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  template: `<p> home can use p tag</p>`,
  styleUrls: [ './app.component.css' ]
})
export class HomeComponent  {
  @Input() name: string;
}
