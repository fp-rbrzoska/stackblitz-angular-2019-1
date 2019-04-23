import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myVar = 5;
  constructor() { }

  ngOnInit() {
  }

  handleChildClick(multipliedCounter) {
    alert(multipliedCounter);
    this.myVar++;
  }

}