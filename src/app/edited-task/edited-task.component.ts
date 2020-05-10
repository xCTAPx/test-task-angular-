import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Todo } from '../todos/todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edited-task',
  templateUrl: './edited-task.component.html',
  styleUrls: ['./edited-task.component.scss']
})
export class EditedTaskComponent implements OnInit {

  constructor(private tasksService: TasksService, private route: ActivatedRoute) { }

  currentId: number;

  ngOnInit() {
    this.currentId = +this.route.snapshot.paramMap.get('id');
  }

  todos: Todo[] = this.tasksService.getTodos();

  checkValue(id: number) {
    this.tasksService.checkValue(id);
    this.todos = this.tasksService.getTodos();
  }

}
