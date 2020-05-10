import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() todo: object;
  @Input() index: number;

  completed: boolean = false;


  constructor(private tasksService: TasksService) { }

  markAsComleted(index: number): void {
    this.completed = !this.completed;
    this.tasksService.markAsCompleted(index);
  }

  ngOnInit() {
  }

}
