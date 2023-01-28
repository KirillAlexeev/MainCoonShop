let questions = document.querySelectorAll('.question-row');
let questionButtons = document.querySelectorAll('.expansion-cell-button');
let answers = document.querySelectorAll('.answer-cell');

for (let i = 0; i < questions.length; i++) {
    questionButtons[i].onclick = function (){
        if(questionButtons[i].classList.contains('is-expanded')){
            questionButtons[i].classList.remove('is-expanded')
            questionButtons[i].textContent = '+';
            answers[i].style.maxHeight = '0';
        }else{
            questionButtons[i].classList.add('is-expanded')
            questionButtons[i].textContent = '—';
            answers[i].style.maxHeight = ((answers[i].textContent.match(/\n/g) || '').length * 50) + 'px';
        }
    }

}
