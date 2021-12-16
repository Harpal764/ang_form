import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoGuard } from './autho/autho.guard';
import { LoginComponent } from './pages/login/login.component';
import { DeshboardComponent } from './shared/deshboard/deshboard.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:'deshboard',component:LayoutComponent,canActivate:[AuthoGuard],
children:[
  {path:'',component:DeshboardComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
