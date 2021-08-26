import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  menuOpen: boolean = false;
  menuToggleClick: boolean = false;

  toggleMenu() {
    this.menuOpen = true;
    this.menuToggleClick = !this.menuToggleClick;
  }
}
