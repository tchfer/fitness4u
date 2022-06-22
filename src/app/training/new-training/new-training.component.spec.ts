import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TrainingService } from '../training.service';

import { NewTrainingComponent } from './new-training.component';

fdescribe('NewTrainingComponent', () => {
  let component: NewTrainingComponent;
  let fixture: ComponentFixture<NewTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainingComponent ],
      imports: [
        FormsModule,
        StoreModule.forRoot({
          training: () => ({
            availableExercises: [],
            runningExercise: null,
            finishedExercises: []
          })
        })
      ],
      providers: [
        {
          provide: TrainingService,
          useValue: jasmine.createSpyObj('TrainingService', ['fetchAvailableExercises', 'startExercise'])
       }
    ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
