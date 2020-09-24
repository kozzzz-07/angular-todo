import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() task!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
