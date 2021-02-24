import { Question, QuestionOptions } from './types';

export default class ApiHelper {

    static async getQuestions( options: QuestionOptions ) {
        const questionRequest = await fetch(
            `https://opentdb.com/api.php?amount=${ options.amount }&difficulty=${ options.difficulty }&type=${ options.type }`
            );
        const questionData = await questionRequest.json();
        return questionData.results.map( ( question: Question ) => {
            return {
                ...question
            }
        });
        
    }

}