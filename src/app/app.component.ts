import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  bootstrapForm = false;
  angularForm = false;

  onClickBootstrap4Form() {
    this.bootstrapForm = true;
    this.angularForm = false;
  }

  onClickAngular2Form() {
    this.bootstrapForm = false;
    this.angularForm = true;
  }

}
