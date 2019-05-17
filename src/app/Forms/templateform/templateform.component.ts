import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
submitDetail=function(hf)
{
  console.log("Hobby Form Value:"+ JSON.stringify(hf.value))
  console.log("Hobby form Valid status:" +hf.valid)
  console.log("Form Invalid Status:" + hf.invalid)
}
  constructor() { }

  ngOnInit() {
  }

}
