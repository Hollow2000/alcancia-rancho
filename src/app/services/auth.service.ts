import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { enviroment } from '../env/enviroment';
import { LoaderService } from './loader.service';
import { Utils } from '../Utils/utils';
import { FamilyService } from './family.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  private readonly _utils = inject(Utils);
  private readonly _loaderService = inject(LoaderService);
  private readonly _familyService = inject(FamilyService);
  mockIsLogged = enviroment.isLogged;

  get authState$(): Observable<User | null> {
    return authState(this._auth);
  }

  async logOut(): Promise<void> {
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

  async singUp(email: string, password: string): Promise<UserCredential | void> {
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    await createUserWithEmailAndPassword(this._auth, email, password).then(user => {
      this._loaderService.hide()
      return user;
    }).catch(error => {
      this._loaderService.hide()
      throw error;
    });
  }

  async login(email: string, password: string): Promise<UserCredential | void> {
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    await signInWithEmailAndPassword(this._auth, email, password).then(user => {
      this._loaderService.hide()
      return user;
    }).catch(error => {
      this._loaderService.hide()
      throw error;
    })
  }

  async updateName(name: string, lastname: string) {
    if (this._auth.currentUser && !enviroment.mockUp) {
      updateProfile(this._auth.currentUser, { displayName: name })
    }
    
    const family = await this._familyService.getFamily(this._auth.currentUser?.uid!);
    if (!family) {
      this._familyService.addFamily({
        id: enviroment.mockUp ? this._utils.generateId() : this._auth.currentUser?.uid,
        nombres: name,
        apellidos: lastname,
        admin: false,
      });
    }
    
  }

  getUserName() {
    return enviroment.mockUp ? 'Mock Up' : this._auth.currentUser?.displayName;
  }

  getUserImage() {
    return enviroment.mockUp ? undefined : this._auth.currentUser?.photoURL ?? undefined;
  }

  async signInWithGoogle(): Promise<UserCredential | void> {
    this._loaderService.show()
    if (enviroment.mockUp) {
      await this._utils.delay(2);
      this._loaderService.hide()
      this.mockIsLogged = true;
      return Promise.resolve();
    }
    const user = await signInWithPopup(this._auth, new GoogleAuthProvider);
debugger
    const family = await this._familyService.getFamily(this._auth.currentUser?.uid!);
      if (!family) {
        const { name, lastname } = this.getNames(user.user.displayName);
        this._familyService.addFamily({
          id: enviroment.mockUp ? this._utils.generateId() : this._auth.currentUser?.uid,
          nombres: name,
          apellidos: lastname,
          admin: false,
          foto: user.user.photoURL ?? undefined
        });
      }

      this._loaderService.hide()
      return user;
  }

  private getNames(displayName: string | null) {
    if (!displayName) { return { name: 'Actualiza tu nombre', lastname: '' }; }
    const nameArray = displayName.split(' ');
    switch (nameArray.length) {
      case 1:
        return { name: nameArray[0], lastname: '' }
      case 2:
        return { name: nameArray[0], lastname: nameArray[1] }
      case 3:
        return { name: nameArray[0], lastname: `${nameArray[1]} ${nameArray[2]}` }
      case 4:
        return { name: `${nameArray[0]} ${nameArray[1]}`, lastname: `${nameArray[2]} ${nameArray[3]}` }
      default:
        return { name: nameArray[0], lastname: `${nameArray[1]} ${nameArray[2]}` }
    }
  }
}
