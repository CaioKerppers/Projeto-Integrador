import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import  User from '../entities/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH  = 'cefisio';

  constructor(private firestore: AngularFirestore,
    private storage: AngularFireStorage) { }

    read(uid: string): Observable<DocumentChangeAction<User>[]> {
      return this.firestore.collection<User>(this.PATH, ref => ref.where('uid', '==', uid)).snapshotChanges();
    }
  
    create(user: User): Promise<any> {
      console.log("Tentativa de criar usuário:", user);
    
      return this.firestore.collection<User>(this.PATH)
        .add(user)
        .then((docRef) => {
          console.log("Usuário criado com sucesso, ID:", docRef.id);
        })
        .catch((error) => {
          console.error("Erro ao criar usuário:", error);
        });
    }
  
    update(user: User, id: string): Promise<void> {
      return this.firestore.collection<User>(this.PATH).doc(id).update(user);
    }

    getImageUrl(imagePath: string): Promise<string | null> {
      const storageRef = this.storage.ref(imagePath);
      return storageRef.getDownloadURL().toPromise().catch((error) => {
        console.error('Erro ao obter URL da imagem:', error);
        return null;
      });
    }
  }
