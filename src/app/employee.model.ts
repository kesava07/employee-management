export class EmployeeModel {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public email: string,
        public mobile: string
    ) { }
}