import {Component} from '@angular/core';
import {fadeAnimation} from './animations/fade.animation';
import {isConstructorMetadata} from '@angular/compiler-cli';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'app';

  constructor() {
  }

  public getRouterOutletState(outlet) {
    console.log(outlet);
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}


