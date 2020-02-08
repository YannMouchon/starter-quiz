import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-edit-quiz-component',
  templateUrl: './edit-quiz-component.component.html',
  styleUrls: ['./edit-quiz-component.component.scss']
})
export class EditQuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
