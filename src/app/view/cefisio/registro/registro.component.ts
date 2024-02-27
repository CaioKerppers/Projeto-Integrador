import { Component } from '@angular/core';
import { AuthService} from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registro = {
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    ra: '',
    tipo: ''
  };

  tipos = ['aluno', 'professor'];

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private router : Router
  ) {}

  registrar() {
    this.authService
    .signUpWithEmailPassword(this.registro.email, this.registro.senha)
    .then((res) => {
      this.router.navigate(["home"]);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
}