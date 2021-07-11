import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
  public authChange = new Subject<boolean>();
  private user: User;

  public registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  public login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  public logout() {
    this.user = null;
    this.authChange.next(false);
  }

  public getUser() {
    return { ...this.user };
  }

  public isAuth() {
    return this.user !== null;
  }
}