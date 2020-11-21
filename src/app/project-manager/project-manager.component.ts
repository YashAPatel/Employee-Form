import { Component, Input, OnInit } from '@angular/core';
import { ChangingColorService } from '../changing-color.service';
import { Employee } from '../shared/employee.model'

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css'],
  providers: [ChangingColorService]
})
export class ProjectManagerComponent implements OnInit {

  @Input('ProjectManager') employeeData: Employee[];

  constructor(private color: ChangingColorService) { }

  ngOnInit(): void {
  }
  
  getColor(salary : number){
    return this.color.changeColor(salary);
  }
}
