import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UiService {

  constructor(private snackbar: MatSnackBar) {}

  public showSnackbar(message, action, duration): void {
    this.snackbar.open(message, action, {
      duration
    });
  }
}
