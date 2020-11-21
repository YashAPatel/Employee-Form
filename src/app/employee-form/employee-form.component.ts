import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public contactNo: number;
  public roleType: string;
  public salary: number;

  pattern="[0-9]{10}$"
  
  @ViewChild('form') signupForm: NgForm;

  @Output() onSubmit = new EventEmitter<{firstName: string, lastName: string, contactNo: number, roleType: string, salary: number}>();

  constructor() {}

  ngOnInit() {

  }
  onSubmitForm(){
   this.onSubmit.emit({ 
     firstName: this.signupForm.value.firstName, 
     lastName: this.signupForm.value.lastName, 
     contactNo: this.signupForm.value.contactNo, 
     roleType: this.signupForm.value.roleType,
     salary: this.signupForm.value.salary }); 
  }
}
