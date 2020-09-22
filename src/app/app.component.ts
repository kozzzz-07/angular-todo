import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Todo[] = [];
  newTaskTitle = '';

  addTask(): void {
    this.tasks.push({ title: this.newTaskTitle, isDone: false });
    this.newTaskTitle = '';
  }
}

type Todo = { title: string; isDone: boolean };
