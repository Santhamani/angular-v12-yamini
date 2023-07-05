import { Component, Input } from '@angular/core';

@Component({
  selector: 'User',
  template:`<div class='container'><p>User tag is using p</p></div>` ,
  styleUrls: [ './app.component.css' ]
})
export class UserComponent  {
  @Input() name: string;
}
