import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-edit-quiz-component',
  templateUrl: './edit-quiz-component.component.html',
  styleUrls: ['./edit-quiz-component.component.scss']
})
export class EditQuizComponent implements OnInit {

  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }

}
