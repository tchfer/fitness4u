import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private trainingService: TrainingService
    ) {}

  initAuthListener() {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  public registerUser(authData: AuthData) {
    this.angularFireAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
      })
      .catch (error => {
        console.log(error);
      });
  }

  public login(authData: AuthData): void {
    this.angularFireAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        console.log(result);
      })
      .catch (error => {
        console.log(error);
      });
  }

  public logout() {
    this.angularFireAuth.signOut();
  }

  public isAuth(): boolean {
    return this.isAuthenticated;
  }

}
