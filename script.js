let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Was ist ein JSON-Array?',
        'answer_1': 'Ein Array, welches von JSON erstellt wurde',
        'answer_2': 'Ein normales Array',
        'answer_3': 'Ein Array mit min. 5 Elementen',
        'answer_4': 'Ein verschachteltes Array',
        'right_answer': 4
    },
    {
        'question': 'Wie viele Ebenen hat ein JSON-Array?',
        'answer_1': '0',
        'answer_2': '1',
        'answer_3': '2',
        'answer_4': '3',
        'right_answer': 3
    },
    {
        'question': 'Welches Programm wird von Entwicklern verwendet?',
        'answer_1': 'Visual Studio Code',
        'answer_2': 'Autocad',
        'answer_3': 'Hecras',
        'answer_4': 'Cubus',
        'right_answer': 1
    },
    {
        'question': 'Wobei handelt es sich um eine Programmiersprache?',
        'answer_1': 'CSS',
        'answer_2': 'Java Script',
        'answer_3': 'HTML',
        'answer_4': 'Englisch',
        'right_answer': 2
    }
];

let currentQuestion = 0;

let rightQuestions = 0;

let audio_success = new Audio('audio/success.mp3');
let audio_false = new Audio('audio/false.mp3');

function init() {
    questionsSum();
    showQuestion();
}

function questionsSum() {
    let content = document.getElementById('questionsSum');
    content.innerHTML='';
    content.innerHTML+=questions.length;
}

function showQuestion() {
    if (gameIsOver()) {
        textEndscreen();
    } else {
        progressBar();         
        updateNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function updateNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML=question['question'];
    document.getElementById('answer_1').innerHTML=question['answer_1'];
    document.getElementById('answer_2').innerHTML=question['answer_2'];
    document.getElementById('answer_3').innerHTML=question['answer_3'];
    document.getElementById('answer_4').innerHTML=question['answer_4']; 
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`
    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_success.play();
        rightQuestions++;
    } else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_false.play();
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    resetButtons();
    showQuestion();
    document.getElementById('next-button').disabled = true;
    document.getElementById('questionNumber').innerHTML=currentQuestion+1;

}

function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function textEndscreen() {
    document.getElementById('endCardBody').style='';
    document.getElementById('cardBody').style='display: none';
    let content = document.getElementById('questionsSumEndscreen');
    content.innerHTML='';
    content.innerHTML+=questions.length;
    document.getElementById('amountCorrectAnswers').innerHTML =rightQuestions;
    document.getElementById('header-img').src = 'img/winner.jpg';

}

function progressBar() {
    let percent = (currentQuestion+1)/questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    console.log(percent);
}

function restartQuiz() {
    document.getElementById('header-img').src = 'img/quiz.jpg';
    document.getElementById('endCardBody').style='display: none';
    document.getElementById('cardBody').style='';
    currentQuestion=0;
    rightQuestions=0;
    document.getElementById('questionNumber').innerHTML=currentQuestion+1;
    
    init();

}