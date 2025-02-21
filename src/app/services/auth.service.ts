import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  mockIsLogged = false;

  get authState$(): Observable<User | null>{
    return authState(this._auth);
  }

  async logOut(): Promise<void>{
    if (enviroment.mockUp) {
      this.mockIsLogged = false;
      return Promise.resolve();
    }
    return signOut(this._auth);
  }

  async singUp(email: string, password: string): Promise<UserCredential | void>{
    if (enviroment.mockUp) {
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    return createUserWithEmailAndPassword(this._auth,email,password);
  }

  async login(email: string, password: string): Promise<UserCredential | void>{
    if (enviroment.mockUp) {
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    return signInWithEmailAndPassword(this._auth, email, password);
  }

  async updateName(name: string){
    if (this._auth.currentUser && !enviroment.mockUp) {
      return updateProfile(this._auth.currentUser,{displayName: name})
    }
  }

  getUserName(){
    return enviroment.mockUp ? 'Mock Up' : this._auth.currentUser?.displayName;
  }

  async signInWithGoogle(): Promise<UserCredential | void>{
    if (enviroment.mockUp) {
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    return signInWithPopup(this._auth,new GoogleAuthProvider);
  }
}
