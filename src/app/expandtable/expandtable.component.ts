import { Component } from '@angular/core';

@Component({
  selector: 'app-expandtable',
  templateUrl: './expandtable.component.html',
  styleUrls: ['./expandtable.component.css']
})
export class ExpandtableComponent {
  TABLE_DATA = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Bob Johnson', age: 35 }
  ];
  isExpanded: boolean[] = [];
  constructor() { }
  ngOnInit() {
    this.isExpanded = new Array(this.TABLE_DATA.length).fill(false);
  }
}
