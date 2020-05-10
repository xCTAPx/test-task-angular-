import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  todos: Todo[] = this.tasksService.getTodos();

  addTask(text: string): void {
    this.tasksService.addTask(text);
    this.todos = this.tasksService.getTodos();
  }

}
