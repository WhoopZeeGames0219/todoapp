import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { validateSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path: 'auth', //TODO: http://localhost:4200/auth PUBLICA
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'task', //TODO: http://localhost:4200/task PRIVADA
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
    canActivate:[
      validateSessionGuard
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
