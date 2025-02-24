import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';
import { LoaderService } from './loader.service';
import { Utils } from '../Utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  private readonly _utils = inject(Utils);
  private readonly _loaderService = inject(LoaderService);
  mockIsLogged = enviroment.isLogged;

  get authState$(): Observable<User | null>{
    return authState(this._auth);
  }

  async logOut(): Promise<void>{
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = false;
      return Promise.resolve();
    }
    const isLogged = await signOut(this._auth);
    this._loaderService.hide()
    return isLogged;
  }

  async singUp(email: string, password: string): Promise<UserCredential | void>{
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    const user = await createUserWithEmailAndPassword(this._auth,email,password);
    this._loaderService.hide()
    return user;
  }

  async login(email: string, password: string): Promise<UserCredential | void>{
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    const user = await signInWithEmailAndPassword(this._auth, email, password);
    this._loaderService.hide()
    return user;
  }

  async updateName(name: string){
    if (this._auth.currentUser && !enviroment.mockUp) {
      return updateProfile(this._auth.currentUser,{displayName: name})
    }
  }

  getUserName(){
    return enviroment.mockUp ? 'Mock Up' : this._auth.currentUser?.displayName;
  }

  getUserImage(){
    return enviroment.mockUp ? undefined : this._auth.currentUser?.photoURL ?? undefined;
  }

  async signInWithGoogle(): Promise<UserCredential | void>{
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    const user = await signInWithPopup(this._auth,new GoogleAuthProvider);
    this._loaderService.hide()
    return user;
  }
}
