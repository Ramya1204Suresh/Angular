import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from '../../services/localservice.service';

@Component({
  selector: 'app-consume1',
  templateUrl: './consume1.component.html',
  styleUrls: ['./consume1.component.css']
})
export class Consume1Component implements OnInit {

allbanks:any
  constructor(private local:LocalserviceService) {       
  }

  ngOnInit() {    
    this.accessLocalService()
      }
  accessLocalService= function()
  {
    console.log(this.local.myPI)
    this.local.displaybank()
    this.allbanks= this.local.addbank()
  }
}
