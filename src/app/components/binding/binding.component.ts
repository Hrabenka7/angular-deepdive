import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    username = '';
    emptyString = true;

  constructor() { }

  ngOnInit() {
  }

  onEnableButton() {
    this.emptyString = false;
  }

  onSetEmpty() {
    this.emptyString = true;
    this.username = '';
  }

}
