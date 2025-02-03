import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  async singUp(email: string, password: string): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this._auth,email,password);
  }

  async updateName(name: string){
    if (this._auth.currentUser) {
      return updateProfile(this._auth.currentUser,{displayName: name})
    }
  }
}
