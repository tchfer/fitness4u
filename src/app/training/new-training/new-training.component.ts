import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore) { }

  public ngOnInit(): void {
    this.exercises = this.db
      .collection('availableExercises')
      .valueChanges();
  }

  public onStartTraining(form: NgForm): void {
    this.trainingService.startExercise(form.value.exercise);
  }

}
