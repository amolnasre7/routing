import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public studentModel:FormGroup;

  constructor() { 
this.studentModel=new FormGroup({
  Name : new FormControl('',[Validators.required]),
  RollNo: new FormControl(),
 
  
});
  }

  public saveStudent(data:any){
    console.log(JSON.stringify(data))
  }

  ngOnInit() {

    
  }

}
