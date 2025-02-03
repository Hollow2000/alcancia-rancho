import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);

  get authState$(): Observable<User | null>{
    return authState(this._auth);
  }

  async singUp(email: string, password: string): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this._auth,email,password);
  }

  async login(email: string, password: string): Promise<UserCredential>{
    return signInWithEmailAndPassword(this._auth, email, password);
  }

  async updateName(name: string){
    if (this._auth.currentUser) {
      return updateProfile(this._auth.currentUser,{displayName: name})
    }
  }

  async signInWithGoogle(): Promise<UserCredential>{
    return signInWithPopup(this._auth,new GoogleAuthProvider);
  }
}
