import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() updateNum = new EventEmitter();
counter: any = 1;
  constructor() { }
sendToParent(){
  this.counter++;
  this.updateNum.emit(this.counter);
}
  ngOnInit() {
  }

}
