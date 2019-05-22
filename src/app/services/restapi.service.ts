import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }
  getRemoteUsers(){
     return this.http.get("https://jsonplaceholder.typicode.com/users")
      
  }
  getRemoteEmployees()
  {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  }
  getEmployeeDetails(id)
  {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employee/"+ id)
  }
  deleteEmployeeById(id)
  {
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+ id)
  }
  createEmployee(employee)
  {
    return this.http.post("http://dummy.restapiexample.com/api/v1/create",employee)
  }
}
