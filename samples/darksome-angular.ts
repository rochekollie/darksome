// @ts-ignore
import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h1>Angular Counter App</h1>
      <p>Count: {{ count }}</p>
      <button (click)="handleClick()">Click me!</button>
    </div>
  `
})
export class CounterComponent {
  count = 0;

  handleClick() {
    this.count++;
  }
}
