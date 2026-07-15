import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos', //name of the pipe to use in template
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {


  //Filter the todos based on the search term
  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm)
      return todos;
    
    const text = searchTerm.toLowerCase();
    return todos.filter(todo => todo.title.toLowerCase().includes(text));
  }

}
