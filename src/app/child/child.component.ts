import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childClick = new EventEmitter();
  @Input() counter = 1;
  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.childClick.emit(this.counter * 2);
  }

}