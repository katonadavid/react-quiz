export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export interface QuestionOptions {
    amount: number;
    difficulty: string;
    type: string;
}

export interface Question {
    category: string;
    correct_answer: string;
    difficulty: Difficulty
    incorrect_answers: [ string, string, string ];
    question: string;
    type: string;
}