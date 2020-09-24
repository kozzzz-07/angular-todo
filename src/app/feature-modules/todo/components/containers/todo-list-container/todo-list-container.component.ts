import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss'],
})
export class TodoListContainerComponent implements OnInit {
  tasks: Todo[] = [];
  newTaskTitle = '';

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    this.tasks.push({ title: this.newTaskTitle, isDone: false });
    this.newTaskTitle = '';
  }
}
