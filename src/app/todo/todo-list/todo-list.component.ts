import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html'
})
export class TodoComponent implements OnInit {
  items: any;
  loading: boolean;
  constructor(readonly todo: TodoService ) {}

  ngOnInit() {
    this.loading = true;
    this.todo.getAllItems().valueChanges.subscribe(({ data, loading }) => {
      this.items = data.all;
      this.loading = loading;
      console.log(data.all, loading);
    });
  }
}
