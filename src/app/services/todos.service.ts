import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

//A Ng service is something that can be injected into a component
// and provides data (maybe by reading from a web service) to a component

@Injectable({
  //Below line means this service will be provided at the root level and will be available automatically in each component
  providedIn: 'root' 
})
export class TodosService {
  todoItems: Todo[] = [{
    title: 'groceries',
    id: 0,
    userId: 1,
    completed: false
  },
  {
    title: 'car wash',
    id: 1,
    userId: 1,
    completed: false
  }
];

  constructor() { }
}
