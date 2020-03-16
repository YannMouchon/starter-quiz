import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private questionService: QuestionService) {
    this.initializeQuestionForm();
  }

  private initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      name: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer() {
    console.log('Answer added');
    this.answers.push(this.createAnswer());
  }

  onSubmitForm() {
    const formValue = this.questionForm.value;
    const newQuestion = new Question(
      formValue.name,
      formValue.answers ? formValue.answers : []
    );
    this.questionService.addQuestion(newQuestion);

  }

  ngOnInit() {
  }


}
