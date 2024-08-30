import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './page/task-page.component';

const routes: Routes = [ //TODO: http://localhost:4200/task/
  {
    path: '',
    component: TaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
