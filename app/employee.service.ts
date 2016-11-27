import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private baseUrl: string = 'http://localhost:8080/EmployeeManagement';
  constructor(private http: Http) {}

  search(id: number){
    return this.http
               .get(`${this.baseUrl}/employee/${id}`)
               .map(response => {
               		return response.json();
               	});
  }
  save(employee){
  	return this.http
      			.put(`${this.baseUrl}/employee/${employee.id}`, employee)
      }
  }
 
