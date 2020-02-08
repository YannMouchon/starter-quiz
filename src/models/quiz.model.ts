import { Question } from './question.model';

export interface Quiz {
    name: string;
    id: string;
    theme: string[];
    logo: string;
    questions: Question[];
    creationDate?: Date;
}
