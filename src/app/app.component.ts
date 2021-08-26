import { Component, VERSION, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen: boolean = false;
  menuBtnClick: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.menuOpen = false;
      }
      this.menuBtnClick = false;
    });
  }
  toggleMenu() {
    this.preventCloseOnClick();
    this.menuOpen = !this.menuOpen;
  }
  preventCloseOnClick() {
    this.menuBtnClick = true;
  }
}
