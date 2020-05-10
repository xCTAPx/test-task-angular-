import { Injectable } from '@angular/core';
import { Todo } from './todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  todos: Todo[] = [];

  getTodos(): Todo[] {
    return [...this.todos];
  }

  addTask(text: string): void {
    if (text.trim() === "") {
      alert("You didn't enter valid text of task!");
      return;
    }
    this.todos = [...this.todos, { id: ++this.todos.length, text: text, completed: false }]
  }

  editTask(index: number, text: string): void {
    if (text.trim() === "") {
      alert("Incorrect edition!");
      return;
    }
    this.todos[index].text = text;
  }

  removeTask(index: number): void {
    this.todos.splice(index, 1);

    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].id = i + 1;
    } // for fixing of id of objects
  }

  markAsCompleted(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }

  checkValue(id: number): void {
    if (!this.todos[id].text.trim()) {
      this.removeTask(id);
      alert("You deleted all text, so we deleted this task!")
    } else return;
  }

}
