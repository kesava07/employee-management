import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  SERVER_NAME = 'http://localhost:8080/api/employees/'
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.SERVER_NAME)
  }

  createEmployee(employeeData: EmployeeModel) {
    return this.http.post(this.SERVER_NAME, employeeData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.SERVER_NAME + id)
  }

  getAnEmployee(id: number) {
    console.log(id);
    return this.http.get(this.SERVER_NAME + id)
  }

  updateEmployee(employeeData: EmployeeModel) {
    return this.http.put(this.SERVER_NAME + employeeData.id, employeeData);
  }

}
