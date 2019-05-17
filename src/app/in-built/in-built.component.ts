import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built',
  templateUrl: './in-built.component.html',
  styleUrls: ['./in-built.component.css']
})
export class InBuiltComponent implements OnInit {
 
  
  money=88
  name='chance-e-illaya'
  birthday=new Date()
    
  constructor() { }

  ngOnInit() {
  }

}
