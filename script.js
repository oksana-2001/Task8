let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.innerText = orderNumber;
//answerField.innerText = `Вы загадали число ${answerNumber }?`;
answerField.innerText = phraseRandom;
document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    operation = null;

    if(gameRun === false){ 
        let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumberField.innerText = orderNumber;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        let phraseRandom = Math.round(Math.random() * 2);
        //answerField.innerText = `Вы загадали число ${answerNumber }?`;
            switch (phraseRandom) {
                case 0:
                    questionPhrase = `Это число ${answerNumber }?`;
                    break;
                case 1:
                    questionPhrase = `ты загадал ${answerNumber }?`;
                    break;
                case 2:
                    questionPhrase = `Это оно ${answerNumber }?`;
                    break;
                case 3:
                    questionPhrase = `Так ${answerNumber }?`;
                    break;
            }
            answerField.innerText = questionPhrase;
        gameRun = true;
    }
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
            let phraseRandom = Math.round(Math.random() * 2);
            //answerField.innerText = `Вы загадали число ${answerNumber }?`;
                switch (phraseRandom) {
                    case 0:
                        questionPhrase = `Это число ${answerNumber }?`;
                        break;
                    case 1:
                        questionPhrase = `ты загадал ${answerNumber }?`;
                        break;
                    case 2:
                        questionPhrase = `Это оно ${answerNumber }?`;
                        break;
                    case 3:
                        questionPhrase = `Так ${answerNumber }?`;
                        break;
                }
                answerField.innerText = questionPhrase;
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
            let phraseRandom = Math.round(Math.random() * 2);
            //answerField.innerText = `Вы загадали число ${answerNumber }?`;
                switch (phraseRandom) {
                    case 0:
                        questionPhrase = `Это число ${answerNumber }?`;
                        break;
                    case 1:
                        questionPhrase = `ты загадал ${answerNumber }?`;
                        break;
                    case 2:
                        questionPhrase = `Это оно ${answerNumber }?`;
                        break;
                    case 3:
                        questionPhrase = `Так ${answerNumber }?`;
                        break;
                }
                answerField.innerText = questionPhrase;
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