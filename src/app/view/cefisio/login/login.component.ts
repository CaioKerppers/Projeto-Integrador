// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/model/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.signIn(this.email, this.senha)
      .then((res) => {
        console.log("Usuário logado:", res.user);
        this.router.navigate(["localhost:4200/login/home"]);
      })
      .catch((error) => {
        console.log("Erro ao fazer login:", error.message);
      });
  }
}
