import { Component } from '@angular/core';
import { Employee } from './shared/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee-Form';
  
  Developer : Employee[] = [];
  Designer : Employee[] = [];
  ProjectManager : Employee[] = [];  
}
