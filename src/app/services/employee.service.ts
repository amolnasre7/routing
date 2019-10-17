import {EmployeeModel} from '../model/employee.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EmployeeServices{
    listEmployee : EmployeeModel[];



    constructor() {
        this.listEmployee=[
            {id :101,name:"amol",gender:"male",email:"amolnasre7@gmail.com",phoneNumber:"9284361838",contactPref:"phone",dateOfBirth:"27/02/1992",department:"Admin",photoPath:"assets/image/breado.jpg"},
            {id :102,name:"kiran",gender:"male",email:"amolnasre7@gmail.com",phoneNumber:"9284361838",contactPref:"phone",dateOfBirth:"27/02/1992",department:"Admin",photoPath:"assets/image/breado.jpg"},
            {id :103,name:"Sujit",gender:"male",email:"amolnasre7@gmail.com",phoneNumber:"9284361838",contactPref:"phone",dateOfBirth:"27/02/1992",department:"Admin",photoPath:"assets/image/breado.jpg"},
        ];
    }
      
  getEmployee() :EmployeeModel[]{
      return this.listEmployee;
  }
    save(employee: EmployeeModel){
        this.listEmployee.push(employee);
    }
  }
  
