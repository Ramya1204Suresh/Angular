import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
users:any
friends:["abcd","boad"]
  constructor(private restapi:RestapiService) { }

  ngOnInit() {
  this.getAllUsers()
  }
getAllUsers()
{
  this.restapi.getRemoteUsers().subscribe((response)=>{
    console.log(response)
    this.users=response
    console.log(this.users)
  },function(error){})
}
}
