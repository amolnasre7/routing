import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentModel } from 'src/app/model/department.model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeeServices } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview=false;

  departments : DepartmentModel[]=[
{id:1,name:'Admin'},
{id:2,name:'Help Desk'},
{id:3,name:'IT'},
{id:4,name:'HR'},
{id:5,name:'PayRoll'}


  ]

  employee : EmployeeModel= {
    id:null,
    phoneNumber:null,
    contactPref:null,
    dateOfBirth:null,
    department:null,
    email:null,
    gender:null,
    name:null,
    photoPath:null,

  }
  togglePhotoPreview() { 
   this.photoPreview=!this.photoPreview;
  }
   //gender="male";//for bydefault checked button
   //isActive="true";// for bydefault check checkbox
  constructor(private _empservice:EmployeeServices,private router:Router) { }

  ngOnInit() {
  }
 saveEmployee() : void{
  //console.log(empForm.value);
  this._empservice.save(this.employee);
  this.router.navigate(['/employee']);

 }
}
