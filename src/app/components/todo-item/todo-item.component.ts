import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>(); //required() makes the todoitem property a required input/signal because we always need it
  todoToggled = output<Todo>(); //to output an event to the parent Todos Component that represents toggling of the checkbox 
  //what we are really emitting in the output is the todo item itself

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
