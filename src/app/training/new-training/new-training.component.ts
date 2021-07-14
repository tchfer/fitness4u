import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  public ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  public onStartTraining(form: NgForm): void {
    this.trainingService.startExercise(form.value.exercise);
  }

}
