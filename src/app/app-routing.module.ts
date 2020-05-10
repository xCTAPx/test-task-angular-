import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditedTaskComponent } from './edited-task/edited-task.component';


const routes: Routes = [{ path: 'tasks', component: TodosComponent },
{ path: 'tasks/new', component: NewTaskComponent },
{ path: 'task/:id', component: EditedTaskComponent },
{ path: '', redirectTo: '/tasks', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
