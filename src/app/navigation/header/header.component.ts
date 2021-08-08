import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  public isAuth$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthService
    ) { }

  public ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
