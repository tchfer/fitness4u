import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UiService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UiService
    ) {}

  public initAuthListener(): void {
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

  public registerUser(authData: AuthData): void {
    this.uiService.loadingStateChanged.next(true);
    this.angularFireAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch (error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  public login(authData: AuthData): void {
    this.uiService.loadingStateChanged.next(true);
    this.angularFireAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch (error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  public logout(): void {
    this.angularFireAuth.signOut();
  }

  public isAuth(): boolean {
    return this.isAuthenticated;
  }

}
