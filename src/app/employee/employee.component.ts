import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeServices } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : EmployeeModel[];

  constructor(private empService : EmployeeServices) {}

  ngOnInit() {
    this.employee = this.empService.getEmployee();
  }

}
