import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false); //input() is a signal coming from outside
  el = inject(ElementRef); //ElementRef is an Ng service giving access to the DOM element the directive is applied to
  //Here it is the li element representing a todo item

  constructor() { }

  //Part of Angular's Signals API, effect() is a function that automatically runs 
  // whenever any Signal it read inside its execution function changes (from the default of input(false) to true). 
  // It is used for tasks like logging, syncing with local storage, or direct DOM manipulation
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } 
    else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });

}
