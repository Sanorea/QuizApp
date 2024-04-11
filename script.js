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
    } else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    
}