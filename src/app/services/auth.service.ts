import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
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
