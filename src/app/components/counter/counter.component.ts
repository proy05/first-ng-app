import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increment(){
    // this.counterValue.set(this.counterValue() + 1);
    //below line same as above line
    this.counterValue.update(val => val + 1);
  }

  decrement(){
    // this.counterValue.set(this.counterValue() -1);
    //same as below
    this.counterValue.update(val => val - 1);

  }

  reset(){
    this.counterValue.set(0);
  }

}
