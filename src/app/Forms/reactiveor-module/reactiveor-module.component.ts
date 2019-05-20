import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,Validator } from '@angular/forms';

@Component({
  selector: 'app-reactiveor-module',
  templateUrl: './reactiveor-module.component.html',
  styleUrls: ['./reactiveor-module.component.css']
})
export class ReactiveorModuleComponent implements OnInit {
myForm:FormGroup

  constructor() { }

  ngOnInit() {

  this.myForm=new FormGroup({
    fn:new FormControl("",
    Validators.compose([Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[a-zA-Z]+$")
  ])),
    score: new FormControl("",this.scoreValidator),
    hobby:new FormControl("treking")
  });
}
submitForm= function(reactiveForm)
{
  console.log(reactiveForm)
  console.log(reactiveForm.value)
}
scoreValidator=function(control)
{
  console.log(control)
  if(control.value<10)
  return {
    score:true
  }
}

}
