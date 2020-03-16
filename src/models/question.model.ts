export class Answer {
    constructor(value: string,
                isCorrect: boolean) {}

}

export class Question {
    constructor(label: string,
                answers?: Answer[]
                ) {}

}
