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

  public registerUser(authData: AuthData) {
    this.angularFireAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        this.authSuccessfully();
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
        this.authSuccessfully();
      })
      .catch (error => {
        console.log(error);
      });
  }

  public logout() {
    this.trainingService.cancelSubscriptions();
    this.angularFireAuth.signOut();
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  public isAuth(): boolean {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
