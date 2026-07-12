import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit //OnInit is a lifecycle hook and has the ngOnInit method that runs when a component is initiated
{
  todoService = inject(TodosService);  //inject TodosService into TodosComponent
  todoItems = signal<Array<Todo>>([]); //initialize with empty array

  ngOnInit(): void {
    console.log(new Date());
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems); //taking the data from the service and updating the signal
    
  }
}