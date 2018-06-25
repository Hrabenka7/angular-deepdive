import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  skillsDisplayed = false;
  buttonText = 'Show';
  logs = [];
  count = 0;


  constructor() { }

  ngOnInit() {
  }

  onShowSkills() {
    this.skillsDisplayed = !this.skillsDisplayed;
    this.count++;
    /* this.logs.push('The yellow button was clicked ' + this.count + 'x.'); */
    this.logs.push(this.logs.length + 1);

    // switching Hide and Show buttonText
    if (this.skillsDisplayed === true) {
      this.buttonText = 'Hide';
    } else {
      this.buttonText = 'Show';
    }
  }
}
