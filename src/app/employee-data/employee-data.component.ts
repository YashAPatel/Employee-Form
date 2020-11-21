import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Developer : Employee[] = [];
  Designer : Employee[] = [];
  ProjectManager : Employee[] = [];

  onFormSubmit(employeeData: { firstName: string, lastName: string, contactNo: number, roleType: string, salary: number }) {

    if (employeeData.roleType === 'Project-Manager') {
      this.ProjectManager.push (employeeData);
    }
    else if (employeeData.roleType === 'Developer') {
      this.Developer.push (employeeData);
    }
    else {
      this.Designer.push (employeeData);
    } 
  }

}
