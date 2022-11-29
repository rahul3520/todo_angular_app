import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-todo',
  templateUrl: './viewall-todo.component.html',
  styleUrls: ['./viewall-todo.component.css']
})
export class ViewallTodoComponent {

  constructor(private api:ApiService)
  {
    api.fetchtodos().subscribe(

      (response) =>
      {
        this.todolist=response;
      }
    )
  }

  todolist:any=[]

}
