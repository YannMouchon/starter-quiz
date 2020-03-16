import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/models/question.model';


export class QuestionService {

    public questions: Question[] = [];
    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

    addQuestion(question: Question) {
        this.questions.push(question);
        this.questions$.next(this.questions);
    }

}
