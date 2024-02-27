import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './model/services/auth.service';import { Auth } from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aparelhos Fisio';
  isMenuOpen = false;
  constructor(private router: Router, private authService : AuthService) {}

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.signOut()
      .then(() => {
        console.log("Logout bem-sucedido");
        // Você pode redirecionar para a página de login ou qualquer outra página após o logout
        this.router.navigate(['signIn']);
      })
      .catch(error => {
        console.log("Erro ao fazer logout:", error.message);
      });
  }
}
