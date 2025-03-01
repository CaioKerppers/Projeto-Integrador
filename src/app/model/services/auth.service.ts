import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {getAuth, signInWithPopup, browserPopupRedirectResolver,GoogleAuthProvider} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados : any;

  constructor(private firebase : FirebaseService,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone) {
      this.fireAuth.authState.subscribe(user=>{
        if(user){
          this.usuarioDados = user;
          localStorage.setItem('user',
          JSON.stringify(this.usuarioDados));
        }else{
          localStorage.setItem('user','null');
        }
      });
    }

    public signIn(email: string, password: string){
      return this.fireAuth
      .signInWithEmailAndPassword(email, password);
    }

    signUpWithEmailPassword(email: string, password: string) {
      console.log("Tentativa de registro com email:", email);
    
      return this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log("Registro bem-sucedido, usuário:", res.user);
        })
        .catch((error) => {
          console.error("Erro durante o registro:", error.message);
        });
    }

    public recoverPassowrd(email:string){
      return this.fireAuth.sendPasswordResetEmail(email);
    }

    public signOut(){
      return this.fireAuth.signOut()
      .then(()=>{
        localStorage.removeItem('user');
        this.router.navigate(['signIn']);
      });
    }

    public getUserLogged(){
      const user : any = JSON
      .parse(localStorage.getItem('user') || 'null');
      if(user != null){
        return user;
      }else{
        return null;
      }
    }

    public isLoggedIn() : boolean{
      const user : any = JSON
      .parse(localStorage.getItem('user') || 'null');
      return (user!==null) ? true : false;
    }


}