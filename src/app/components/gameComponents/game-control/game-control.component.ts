import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalSet = new EventEmitter <number>();
  interval;
  preNumber = 0;

  constructor() { }

  ngOnInit() {}

  onFireCounter() {
     this.interval = setInterval(() => {
       this.intervalSet.emit(this.preNumber + 1);
       this.preNumber++;
     }, 1000);
  }

  onStopCounter() {
    clearInterval(this.interval);
  }
}
