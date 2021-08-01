import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {}

  public registerUser(authData: AuthData) {
    this.angularFireAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch (error => {
        console.log(error);
      });
  }

  public login(authData: AuthData) {
    this.angularFireAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch (error => {
        console.log(error);
      });
  }

  public logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  public getUser(): object {
    return { ...this.user };
  }

  public isAuth(): boolean {
    return this.user !== null;
  }

  private authSuccessfully(): void {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
