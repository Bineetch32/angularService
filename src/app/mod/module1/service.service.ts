import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  EmpData:Employee[]=[
{
  eid:101,
  ename:'Aikki',
  eaddr:'HingneColony'
},
{
  eid:102,
  ename:'Bikki',
  eaddr:'Deccan'
},
{
  eid:103,
  ename:'Chakki',
  eaddr:'Karvenagar'
}



  ]
}
