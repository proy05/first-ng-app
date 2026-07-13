import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

//A Ng service is something that can be injected into a component
// and provides data (maybe by reading from a web service) to a component

@Injectable({
  //Below line means this service will be provided at the root level and will be available automatically in each component
  providedIn: 'root' 
})
export class TodosService {
  http = inject(HttpClient);

  // constructor() { }

  getTodosFromApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(url);
  }
}
