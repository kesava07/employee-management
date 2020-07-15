import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDatabaseService } from './services/employeeDatabase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/contextroot", pathMatch: 'full' },
      {
        path: "contextroot", component: HomeComponent,
        children: [
          { path: "employees", component: EmployeeListComponent },
          { path: "addEmployee", component: AddEmployeeComponent },
          { path: "editEmployee/:id", component: AddEmployeeComponent },
          { path: "details", component: EmployeeDetailsComponent }
        ]
      },
      { path: "**", redirectTo: "/contextroot" }
    ]),
    InMemoryWebApiModule.forRoot(EmployeeDatabaseService),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
