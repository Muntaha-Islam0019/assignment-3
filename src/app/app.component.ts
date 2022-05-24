import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display: boolean = false;
  logArray: Date[] = [];

  onClick() {
    this.display = !this.display;
    let dateTime = new Date();
    this.logArray.push(dateTime);
  }
}
