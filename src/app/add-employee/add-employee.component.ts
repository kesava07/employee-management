import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';
import { EmployeeModel } from '../employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeSer: EmployeeDataService, private router: Router, private route: ActivatedRoute) { }
  @ViewChild("employeeForm") employeeForm: NgForm;
  employees: EmployeeModel[];
  employeeId: number;
  editEmployee: boolean = false;
  ngOnInit() {
    this.employeeSer.getEmployees().subscribe((data: EmployeeModel[]) => {
      this.employees = data
    });
    this.route.params.subscribe(params => {
      this.employeeId = +params.id;
    })
    if (this.employeeId) {
      this.editEmployee = true
      this.employeeSer.getAnEmployee(this.employeeId)
        .subscribe((details: EmployeeModel) => {
          const newDetails = {
            name: details.name,
            location: details.location,
            mobile: details.mobile,
            email: details.email
          }
          this.employeeForm.setValue(newDetails)
        })
    }
  }

  addEmployee(employee) {
    if (employee.form.valid) {
      const newEmployee = employee.form.value;
      if (this.editEmployee && this.employeeId) {
        newEmployee.id = this.employeeId;
        this.employeeSer.updateEmployee(newEmployee).subscribe(() => {
          this.router.navigate(['contextroot', 'employees']);
        })
      } else {
        newEmployee.id = this.employees.length + 1;
        this.employeeSer.createEmployee(newEmployee).subscribe(() => {
          console.log("User created");
          this.router.navigate(['contextroot', 'employees']);
        })
      }
    }
  }

}
