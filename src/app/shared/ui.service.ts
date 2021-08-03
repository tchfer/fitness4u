import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UiService {
  public loadingStateChanged = new Subject<boolean>();

  constructor(private snackbar: MatSnackBar) {}

  public showSnackbar(message, action, duration): void {
    this.snackbar.open(message, action, {
      duration
    });
  }
}
