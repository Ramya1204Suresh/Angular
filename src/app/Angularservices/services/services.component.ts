import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  name="Angular7"
  constructor() { }

  ngOnInit() {
  }
receivedNewName=function(e)
{
  console.log(e)
  this.name=e
}
}
