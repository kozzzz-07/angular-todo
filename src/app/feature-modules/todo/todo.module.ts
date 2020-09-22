import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/presentations/todo-list/todo-list.component';
import { TodoListContainerComponent } from './components/containers/todo-list-container/todo-list-container.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListContainerComponent,
    TodoListPageComponent,
  ],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
