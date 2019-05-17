import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from '../../services/localservice.service';

@Component({
  selector: 'app-consume2',
  templateUrl: './consume2.component.html',
  styleUrls: ['./consume2.component.css']
})
export class Consume2Component implements OnInit {

  constructor(private local: LocalserviceService) {}

  ngOnInit() {
    

  }

}
