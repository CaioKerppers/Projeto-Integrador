// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './view/cefisio/registro/registro.component';
import { AparelhosComponent } from './view/cefisio/aparelhos/aparelhos.component';
import { ServicosComponent } from './view/cefisio/servicos/servicos.component';
import { SobreComponent } from './view/cefisio/sobre/sobre.component';
import { HomeComponent } from './view/cefisio/home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './view/cefisio/login/login.component';
import { environment } from 'src/enviroments/enviroment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    AparelhosComponent,
    ServicosComponent,
    SobreComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
