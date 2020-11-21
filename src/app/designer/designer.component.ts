import { Component, OnInit, Input } from '@angular/core';
import { ChangingColorService } from '../changing-color.service';
import { Employee } from '../shared/employee.model'

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
  providers: [ChangingColorService]

})
export class DesignerComponent implements OnInit {

  @Input('Designer') employeeData: Employee[];
  
  constructor(private color: ChangingColorService) { }

  ngOnInit(): void {
  }

  getColor(salary : number){
    return this.color.changeColor(salary);
  }
}
