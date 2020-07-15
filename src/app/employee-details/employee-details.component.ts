import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeSer: EmployeeDataService, private router: Router) { }
  employeeId: number;
  employee: EmployeeModel;
  errorMessage;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.employeeId) {
        this.employeeId = + params.employeeId
      }
    })
    if (this.employeeId) {
      this.employeeSer.getAnEmployee(this.employeeId)
        .subscribe((employee: EmployeeModel) => {
          this.employee = employee
        }, (err) => {
          console.log(err.body.error);
          this.errorMessage = err.body.error
        })
    }
  }
  redirect() {
    this.router.navigate(['contextroot', 'employees']);
  }

}
