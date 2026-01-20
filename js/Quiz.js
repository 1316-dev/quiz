// default pour une classe
export default class Quiz {
    constructor(questions,score){
        this.questions = questions;
        this.score = score;
    }

    afficherQuestion(question) {
        question.afficher();
        
    }
    verifierReponse(){

    }
}

