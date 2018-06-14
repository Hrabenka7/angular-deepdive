import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  disableButton = true;
  greeting = 'Hello Marketa';
  name = '';

  constructor() {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onChangeGreeting() {
    this.greeting = 'Goodbye ' + this.name;
  }

  onSetName() {
    this.name = (<HTMLInputElement>event.target).value;
  }

}
