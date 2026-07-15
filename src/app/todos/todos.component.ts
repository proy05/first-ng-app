import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
// import { NgIf } from '@angular/common'; //not needed if using @if

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit //OnInit is a lifecycle hook and has the ngOnInit method that runs when a component is initiated
{
  todoService = inject(TodosService);  //inject TodosService into TodosComponent
  todoItems = signal<Array<Todo>>([]); //initialize with empty array
  searchTerm = signal(''); //empty by default

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

  //function to update the toggled todo item inside the parent Todo component
  // It is called when the Todoitem child component emits a toggled event
  updateTodoitem(todoitem : Todo){ 
    this.todoItems.update(todos => {
      return todos.map(todo => {
        if (todo.id === todoitem.id){  //if the id matches with that of the toggled todoitem received from the child component
          //console.log(`current value of toggled todo ${todoitem.title} completed property: ${todoitem.completed}`);
          //above lines proves that that the toggled todoitem received from the child component retains 
          // the original value of the completed property (Probably bcoz we are using the checked property instead of the value property of checkbox). 
          // Hence we need to flip it in below code. 
          
          return {
            ...todo, //use other props as is
            completed: !todoitem.completed //flip the current value of the toggled todoitem
          }
        }
        return todo;
      })     
    })
  }
}