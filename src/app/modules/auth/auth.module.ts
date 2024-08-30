import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from './page/login-page.component';


@NgModule({
  declarations: [ //TODO: Componentes, pipes, directivas
    LoginPageComponent,
  ],
  imports: [ //TODO: Son otros modulos
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
