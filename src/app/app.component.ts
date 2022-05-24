import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display: boolean = false;
  logArray: number[] = [];

  onClick() {
    this.display = !this.display;
    this.logArray.push(this.logArray.length + 1);
  }
}
