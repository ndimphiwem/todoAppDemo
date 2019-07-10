import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-list/todo.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {
  todoForm: FormGroup;
  closeResult: string;
  loading: boolean;

  constructor(
    private todoService: TodoService,
    readonly fb: FormBuilder,
    readonly modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loading = false;
    this.todoForm = this.fb.group({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      description: new FormControl(''),
      contents: new FormControl('')
    });
  }

  createToDoItem(formObj, content) {
    this.loading = true;
    const item = {
      name: formObj.value.name,
      category: formObj.value.category,
      priority: formObj.value.priority,
      description: formObj.value.description,
      contents: formObj.value.contents
    };

    this.todoService.createItem(item).subscribe(res => {
      this.loading = false;
      this.todoForm.setValue({
        name: '',
        category: '',
        priority: '',
        description: '',
        contents: ''
      });
      this.open(content);
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
