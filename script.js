let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
if (isNaN(minValue) || minValue ==="" ){
    isNaN(minValue);
    minValue = Number("1");
}

let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if (isNaN(maxValue) || maxValue ==="" ){
    maxValue = Number("100");
}

if (maxValue > 999 || minValue< -999 || maxValue < - 999 || minValue > 999){
  
    minValue = minValue < parseInt (-999 ) ? parseInt(( -999 )) : minValue;
    maxValue = maxValue > parseInt (999 ) ? parseInt(( 999 )) : maxValue;
    minValue = minValue > parseInt (999 ) ? parseInt(( -999 )) : minValue;
    maxValue = maxValue < parseInt (-999 ) ? parseInt(( 999 )) : maxValue;
    alert(`Загадайте любое целое число от -999 до 999, а я его угадаю`);
}else{
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    operation = null;
    location.reload();
    })

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1: 
                    answerPhrase = `Я в шоке..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Это неверно\n\u{1F605}`;
                    break;

            }
                answerField.innerText = answerPhrase;
                gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let questionField;
            let questionRandom= Math.round( Math.random()*2);
            switch (questionRandom) {
                                case 0:
                  questionField =`Вы загадали число ${answerNumber}?`;
                                  break;
                                case 1:
               questionField = `Да это легко! Ты загадал ${answerNumber}?`;
                                    break;
                                case 2:
             questionField =`Наверное, это число ${answerNumber}?`;
                                    break;
            
                }
        
                answerField.innerText = questionField;
            gameRun = true;
        }
    }
})
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue - 1){
            let phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1: 
                    answerPhrase = `Я в шоке..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Это неверно\n\u{1F605}`;
                    break;

            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let questionField;
            const questionRandom= Math.round( Math.random()*2);
            switch (questionRandom) {
                                case 0:
                  questionField =`Вы загадали число ${answerNumber}?`;
                                  break;
                                case 1:
               questionField = `Да это легко! Ты загадал ${answerNumber}?`;
                                    break;
                                case 2:
             questionField =`Наверное, это число ${answerNumber}?`;
                                    break;
            
                }
                answerField.innerText = questionField;
            gameRun = true;
        }
    }
})
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F609}`;
                break;
            case 1:
                answerPhrase = `Это было не сложно \n\u{1F929}`;
                break;
            case 2:
                answerPhrase = `Проще простого\n\u{1F61C}`;
                break;
            case 3:
                answerPhrase = `В следующий раз, давай что-то по сложнее\n\u{1F60E}`;
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
function answer(question) {
    switch (question) {
        case 0:
            answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            break;
        case 1:
            answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
            break;
        case 2:
            answerPhrase = `Что-то тут не так\n\u{1F9D0}`;
            break;
        case 3:
            answerPhrase = `Я вам не верю, вы всё врети\n\u{1F62D}`;
            break;
    }
    return answerPhrase;
} 