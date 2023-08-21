import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibuyOffDemo';
  public toggleSidebar = false;

  myFunction() {
    this.toggleSidebar = !this.toggleSidebar;
  }


  openToggle(id: string) {
    let element = document.getElementById(id)

    if (element.className == "opener") {
      element.className = "opener active"
    } else {
      element.className = "opener"
    }

  }

}
