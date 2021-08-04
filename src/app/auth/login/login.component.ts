import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../auth.service';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(
    private authService: AuthService,
    private uiService: UiService
    ) { }

    public ngOnInit(): void {
      this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
        this.isLoading = this.isLoading;
      });
      this.loginForm = new FormGroup({
        email: new FormControl('', {validators: [Validators.required, Validators.email]}),
        password: new FormControl('', {validators: [Validators.required]})
      });
    }

    public onSubmit(): void {
      this.authService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      });
    }

    ngOnDestroy(): void {
      if (this.loadingSubs) {
        this.loadingSubs.unsubscribe();
      }
    }
}
