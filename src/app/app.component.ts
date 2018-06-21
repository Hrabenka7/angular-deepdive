import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = []; // oddNumbers is a type "array of numbers", and its empty array
  evenNumbers: number[] = [];

  onIntervalSet(Number: number) {   // receive event "Number" of type number
    if (Number % 2 === 0) {
      this.evenNumbers.push(Number);
    } else {
      this.oddNumbers.push(Number);
    }
  }
}
