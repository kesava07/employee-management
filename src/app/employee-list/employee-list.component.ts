import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeesSer: EmployeeDataService) { }

  employees: EmployeeModel[];
  searchTerm: string;

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesSer.getEmployees().subscribe((data: EmployeeModel[]) => {
      this.employees = data;
    })
  }

  deleteEmployee(id: number) {
    this.employeesSer.deleteEmployee(id)
      .subscribe(() => {
        console.log("Employee deleted")
        this.getEmployees();
      })
  }

}
