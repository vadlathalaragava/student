import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students: Student[]=[
    {id:1,firstName:'John',lastName:'Doe',email:'john@mail',phone:'93458946934'},
    {id:2,firstName:'mikal',lastName:'jack',email:'mikal@mail',phone:'93458946934'},
    {id:3,firstName:'sachin',lastName:'tendulkar',email:'kjkfsdjohn@mail',phone:'93458946934'}
  ];
  constructor() { }


  getStudent(){
    return this.students;
  }
  // addPerson(person:Student){
  //   person.id=Math.round(Math.round()*100000);
  //   this.students.push(student);
  // }


  // getStudentById(id:number){
  //   for(var i=0;i<this.getStudent.length;i++){
  //     if(id=this.students[i].id){
  //       return this.students[i];
  //     }
  //   }
  //   return null;
  // }

  // deleteStudent(student){

  // }

}
