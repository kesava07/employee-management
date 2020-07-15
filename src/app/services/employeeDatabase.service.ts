import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeModel } from '../employee.model';


export class EmployeeDatabaseService implements InMemoryDbService {
    createDb() {
        let employees: EmployeeModel[] = [
            { id: 1, name: "Ram", location: "Bangalore", email: "ram@mail.com", mobile: "9867512345" },
            { id: 2, name: "Raj", location: "Chennai", email: "raj@mail.com", mobile: "7867534521" },
            { id: 3, name: "Vinay", location: "Pune", email: "vinay@mail.com", mobile: "9975287450" }
        ]
        return { employees }
    }
}