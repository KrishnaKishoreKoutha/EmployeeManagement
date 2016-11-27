import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'em-employee'
})
export class Employee {
  @Input() employee;
}
