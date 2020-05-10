import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

export interface Todo {
  id: number,
  text: string,
  completed: boolean
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  public todos: Todo[] = this.tasksService.getTodos();

  removeTask(event: any, index: number) {

    if (event.target.classList.contains("remove")) {
      this.tasksService.removeTask(index);
      this.todos = this.tasksService.getTodos();
    }
  }
}
