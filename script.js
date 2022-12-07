let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
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
     
    if(gameRun === false){ 
        let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumberField.innerText = orderNumber;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
    }
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                answerField.innerText = answerPhrase;
                gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue - 1){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
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

