import  Quiz  from "./Quiz.js";
import  Question from "./Question.js";
import { questionsData } from "./donnees.js";


// récupération des donénes de questions et créatino du quiz
const questions = questionsData.map( 
    question => new Question (question.enonce, 
                              question.reponses, 
                              question.reponseCorrecte)
);

const quiz = new Quiz (questions,0);
quiz.afficherQuestion(quiz.questions[0]); 



const $buttonReset = document.getElementById("reset");
const $buttonValider = document.getElementById("valider");
const $divQuiz = document.getElementById("quiz");
const $error = document.getElementById("error");
let nbQuestion = questions.length ;
let i = 0;
const $score= document.getElementById("score");


$buttonValider.addEventListener('click', event => {
    $error.style.display = "none"
    const selectProposition = document.querySelector('input[name="proposition"]:checked');
    if (!selectProposition) { 
        $error.style.display = "block"
        return; 
    }

    const selectPropositionValue = selectProposition.value;    
    if (selectPropositionValue == questions[i].reponseCorrecte) {
        quiz.score++
    }

    $score.innerText = `${quiz.score}/${questions.length}`;
    console.log("choix numéro " + selectPropositionValue)
    console.log("bonne réponse " + questions[i].reponseCorrecte)
    i++
    console.log("question numéro :" + i)
    if (i < nbQuestion ) {
        quiz.afficherQuestion(quiz.questions[i]);
        
        
    }
    else 
        setTimeout(() => {
          $score.innerText = `Fin du jeu, votre score est de ${quiz.score}/${questions.length}`;
            $buttonReset.style.display = "block";
            $divQuiz.style.display = "none";
        }, "500");
})

$buttonReset.addEventListener('click', event => {
    location.reload();
})