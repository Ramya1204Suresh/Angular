import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,Validator } from '@angular/forms';
@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
users:any
employees:any
employee:any
message:any
friends:["abcd","boad"]
myEmpForm: FormGroup;
  constructor(private restapi:RestapiService,private myrouter:Router) { }

  ngOnInit() {
  //this.getAllUsers()
  this.getAllEmployees()
    //this.getEmployeeDetails(id)
  //this.myrouter.navigate(["route_I_want_to_navigate-to"])
  this.myEmpForm=new FormGroup({
    name:new FormControl("",
    Validators.compose([Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[a-zA-Z]+$")
  ])),
    age: new FormControl(""),
    salary:new FormControl("")
  });
  }
getAllUsers()
{
  this.restapi.getRemoteUsers().subscribe((response)=>{
    console.log(response)
    this.users=response
    console.log(this.users)
  },function(error){})
}
getAllEmployees()
{
  this.restapi.getRemoteEmployees().subscribe((response)=>{
    console.log(response)
    this.employees=response
    console.log(this.employees)
  },function(error){})
}
getEmployeeDetails(id)
{
  console.log(id)
  //navigate to rout /remote/id
  //navigate to route /remote/3877

  this.myrouter.navigate(["/remote",id])
  //this.restapi.getEmployeeDetails(id).subscribe((response)=>{
  //console.log(response)
 // }
}
deleteEmployee(id)
{
  console.log(id)
this.restapi.deleteEmployeeById(id).subscribe((response)=>{
  console.log(response)
  this.message=response.success.text
  console.log(this.getAllEmployees)
},function(error){})

}

addEmployee=function(myEmpForm)
{
  console.log(myEmpForm.value)
  this.employee=myEmpForm.value
  this.restapi.createEmployee(this.employee).subscribe((response)=>
  {
    console.log(response)
this.getAllEmployees()
  })
}
}
