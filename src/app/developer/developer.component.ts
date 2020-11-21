import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model'
import { ChangingColorService } from '../changing-color.service'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
  providers: [ChangingColorService]
})
export class DeveloperComponent implements OnInit {

  @Input('Developer') employeeData: Employee[];

  constructor(private color: ChangingColorService) { }

  ngOnInit(): void {
  }
  
  getColor(salary : number){
    return this.color.changeColor(salary);
  }

}
