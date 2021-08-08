import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Exercise } from './exercise.model';
import { UiService } from '../shared/ui.service';
import * as UI from '../shared/ui.actions';
import * as Training from '../training/training.actions';
import * as fromTraining from '../training/training.reducer';

@Injectable()
export class TrainingService {
  private firebaseSubscriptions: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromTraining.State>
    ) {}

  public fetchAvailableExercises(): void {
    this.store.dispatch(new UI.StartLoading());
    this.firebaseSubscriptions.push(this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc['id'],
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories']
          };
        });
      })
      )
      .subscribe((exercises: Exercise[]) => {
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.SetAvailableTrainings(exercises));
      }, error => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar('Fetching exercises failed. Please try again later', null, 3000);
      }));
  }

  public startExercise(selectedId: string): void {
    this.store.dispatch(new Training.StartActiveTraining(selectedId));
  }

  public completeExercise(): void {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        date: new Date(),
        state: 'completed'
      });
      this.store.dispatch(new Training.StopActiveTraining());
    });
  }

  public cancelExercise(progress: number): void {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        duration: ex.duration * (progress / 100),
        calories: ex.calories * (progress / 100),
        date: new Date(),
        state: 'cancelled'
      });
      this.store.dispatch(new Training.StopActiveTraining());
    });
  }

  public fetchCompletedOrCancelledExercises(): void {
    this.firebaseSubscriptions.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.store.dispatch(new Training.SetFinishedTrainings(exercises));
      }));
  }

  public cancelSubscriptions(): void {
    this.firebaseSubscriptions.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise): void {
    this.db.collection('finishedExercises').add(exercise);
  }

}
