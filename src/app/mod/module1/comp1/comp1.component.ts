import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private cs:ServiceService) { }

  ngOnInit(): void {
  }
empp:Employee[]=this.cs.EmpData
}
