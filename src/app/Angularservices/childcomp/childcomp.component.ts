import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
@Input() sendName
@Output() sendToParent= new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  broadCastChange=function(e)
  {
    this.sendToParent.emit(this.sendName)
  }

}
