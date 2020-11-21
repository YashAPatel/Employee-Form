export class Employee{
    public firstName: string;
    public lastName: string;
    public contactNo: number;
    public roleType: string;
    public salary: number;

    constructor(firstName: string, lastName: string, contactNo: number, roleType: string, salary: number){
        firstName = this.firstName;
        lastName = this.lastName;
        contactNo = this.contactNo;
        roleType = this.roleType;
        salary = this.salary;
    }
}