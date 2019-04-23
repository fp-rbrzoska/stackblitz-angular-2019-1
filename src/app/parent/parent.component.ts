import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myVar = [1,2,3,4];
  showList = true;
  constructor() { }

  ngOnInit() {
  }

  handleChildClick(multipliedCounter) {
    alert(multipliedCounter);
  }

  toggleShowList() {
    this.showList = !this.showList;
  }

}