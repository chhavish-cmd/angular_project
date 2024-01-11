import { AddTodoComponent } from './../add-todo/add-todo.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../todo';
import { isNgContainer } from '@angular/compiler';
import { ListItemComponent } from './list-item/list-item.component';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  eName: string;
  eType: string;
  required: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {eName: 'Hydrogen', eType: "1.0079", required: true},
  {eName: 'Helium', eType: "4.0026", required: true},
  {eName: 'Lithium', eType: "6.941", required: true},
  {eName: 'Beryllium', eType: "9.0122", required: true},
  {eName: 'Boron', eType: "10.811", required: true},
  {eName: 'Carbon', eType: "12.0107", required: true},
  {eName: 'Nitrogen', eType: "14.0067", required: true},
  {eName: 'Oxygen', eType: "15.9994", required: true},
  {eName: 'Fluorine', eType: "18.9984", required: true},
  {eName: 'Neon', eType: "20.1797", required: true},
];


@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListItemComponent,AddTodoComponent,MatTableModule],

  
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.css'
})
export class MyCompComponent implements OnInit{
  todos: Todo[]=[];
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"Title 1",
        desc: "discription 1",
        active: true
      },
      {
        sno:2,
        title:"Title 2",
        desc: "discription 2",
        active: false
      },
      {
        sno:3,
        title:"Title 3",
        desc: "discription 3",
        active: true
      }
    ]
  }
  
  ngOnInit(): void{
    
  }
  deleteTodo(todo: Todo){
    const index=this.todos.indexOf(todo);
    console.log(todo);
    this.todos.splice(index,1);
  }
  displayedColumns: string[] = ['element-name', 'element-type', 'required'];
  dataSource = ELEMENT_DATA;
}
