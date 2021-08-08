import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import * as fromTraining from '../../training/training.reducer';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
    ) { }

    public ngOnInit(): void {
      this.isLoading$ = this.store.select(fromRoot.getIsLoading);
      this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
      this.fetchTraining();
    }

    public fetchTraining(): void {
      this.trainingService.fetchAvailableExercises();
    }

    public onStartTraining(form: NgForm): void {
      this.trainingService.startExercise(form.value.exercise);
    }
}
