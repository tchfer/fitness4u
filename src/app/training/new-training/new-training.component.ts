import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  isLoading = true;
  private exerciseSubscription: Subscription;
  private loadingSubs: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UiService
    ) { }

    public ngOnInit(): void {
      this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
        isLoading => {
          this.isLoading = isLoading;
        }
      );
      this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
        exercises => {
          this.exercises = exercises;
          }
        );
      this.fetchTraining();
    }

    public fetchTraining(): void {
      this.trainingService.fetchAvailableExercises();
    }

    public onStartTraining(form: NgForm): void {
      this.trainingService.startExercise(form.value.exercise);
    }

    ngOnDestroy(): void {
      if (this.exerciseSubscription) {
        this.exerciseSubscription.unsubscribe();
      }
      if (this.loadingSubs) {
        this.loadingSubs.unsubscribe();
      }
    }
}
