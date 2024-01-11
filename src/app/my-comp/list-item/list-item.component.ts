import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { Element } from '../../element';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input()  todo!: Todo;
  @Input() element!: Element;

  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();
  
  constructor(){};
  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggered");
  }
  // displayedColumns: string[] = ['element-name', 'element-type', 'required'];
  
}
