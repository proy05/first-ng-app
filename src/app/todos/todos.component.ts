import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

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
    this.todoService.getTodosFromApi()  //returns an observable similar in usage to a promise
    .pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
    .subscribe(todos => {
      this.todoItems.set(todos);  //update the signal with the data from the service
    });
    
  }
}