import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/cefisio/home/home.component';
import { ServicosComponent } from './view/cefisio/servicos/servicos.component';
import { RegistroComponent } from './view/cefisio/registro/registro.component';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './view/cefisio/login/login.component';
import { SobreComponent } from './view/cefisio/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent },
  { path: 'servicos', component: ServicosComponent, canActivate : [AuthGuard]},
  { path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
