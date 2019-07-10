import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo-list/todo-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoService } from './todo-list/todo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '', component: TodoComponent,
  },
  {
    path: 'create', component: TodoDetailComponent
  }
];
@NgModule({
  declarations: [TodoComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [TodoService],
  exports: [TodoComponent, TodoDetailComponent]
})
export class TodoModule { }
