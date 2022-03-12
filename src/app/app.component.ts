import { Component, VERSION, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  clickMe(){
    console.log('clicked');
  }
}
