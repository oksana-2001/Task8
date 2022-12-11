let minValue,
    maxValue,
    answerNumber,
    gameRun = true,
    orderNumber = 1,
    inputNumber = 0,
    arr = [];

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;

document.querySelector('#btnRetry').addEventListener('click', () => {
    location.reload();
});

document.querySelector('#btnOver').addEventListener('click', () => {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        if (minValue === maxValue) {
            const answerPhrase = answer(phraseRandom);

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerHTML = divine(phraseRandom, answerNumber);;
        }
    }
});

document.querySelector('#btnLess').addEventListener('click', () => {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        if (minValue >= maxValue - 1) {
            const answerPhrase = answer(phraseRandom);
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerHTML = divine(phraseRandom, answerNumber);;
        }
    }
});

document.querySelector('#btnEqual').addEventListener('click', () => {
    if (gameRun) {
        let phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F609}`;
                break;
            case 1:
                answerPhrase = `Это было легко\n\u{1F929}`;
                break;
            case 2:
                answerPhrase = `Проще простого\n\u{1F61C}`;
                break;
            case 3:
                answerPhrase = `В следующий раз, давай по сложнее что-то\n\u{1F60E}`;
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
});

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    inputValue();
});

document.querySelector('#button').addEventListener('click', (event) => {
    let inputValue = document.querySelector('#inputNumber');
    if (inputValue) {
        inputValue.value = inputValue.value > 999 ? (event.preventDefault(), 999) : inputValue.value < -999 ? (event.preventDefault(), -999) : inputValue.value;
    }
});

function inputValue() {
    if (inputNumber === 0) {
        document.querySelector('.textHeader').innerText = 'Введите первое число от -999 до 999';
        document.querySelector('#button').innerText = 'Ввести';
        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.placeholder = 'Введите число';
        input.id = 'inputNumber';
        input.required = true;
        document.querySelector('#form').childNodes[3].insertAdjacentElement('afterend', input);
        input.focus();
        inputNumber++;
    } else if (inputNumber === 1) {
        document.querySelector('.textHeader').innerText = 'Введите второе число от -999 до 999';
        arr.push(document.querySelector('#inputNumber').value);
        form.reset();
        inputNumber++;
    } else if (inputNumber === 2) {
        arr.push(document.querySelector('#inputNumber').value);
        arr.sort((a, b) => {
            return a - b;
        });
        document.querySelector('#inputNumber').remove();
        let h2 = document.querySelector('.textHeader');
        let button = document.querySelector('#button');
        button.id = '#modalClose';
        button.innerText = 'Начать';
        button.focus();
        minValue = parseInt(arr[0]);
        maxValue = parseInt(arr[1]);
        if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
            minValue = 0;
            maxValue = 999;
        }
        h2.innerText = `Вы ввели числа ${minValue} и ${maxValue}!`;
        inputNumber++;
    } else if (inputNumber === 3) {
        document.querySelector('.blur').remove();
        answerNumber = Math.floor((minValue + maxValue) / 2);
        answerField.innerHTML = `Вы загадали число <b>${numberAsText(answerNumber)}</b>?\n\u{1F62C}`;
    }
}
function divine (question, answerNumber) {
    switch (question) {
        case 0:
            answerPhrase = `Может это число <b>${numberAsText(answerNumber)}</b>?\n\u{1F62C}`;
            break;
        case 1:
            answerPhrase = `Да это легко! Ты загадал <b>${numberAsText(answerNumber)}</b>\n\u{1F60C}`;
            break;
        case 2:
            answerPhrase = `Наверное, это число <b>${numberAsText(answerNumber)}</b>\n\u{1F914}`;
            break;
        case 3:
            answerPhrase = `Все просто! Это число <b>${numberAsText(answerNumber)}</b>\n\u{1F917}`;
            break;
        default:
            break;
    }
    return answerPhrase;
}

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

function numberAsText(number) {
    let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'ноль'];
    let gaps = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let numberAsText = Math.sign(number) === -1 ? 'минус ' : '';
    let numberToText = Math.abs(number).toString();
    if (numberToText.length === 3) {
        numberAsText += hundreds[numberToText[0]];
        if (numberToText[1] + numberToText[2] > 20 && numberToText[2] != 0) {
            numberAsText += ' ' + dozens[numberToText[1] - 1] + ' ' + units[numberToText[2]];
        } else if (numberToText[1] + numberToText[2] < 20 && numberToText[1] + numberToText[2] > 10) {
            numberAsText += ' ' + gaps[numberToText[2] - 1];
        } else if (numberToText[1] + numberToText[2] == 20) {
            numberAsText += ' ' + dozens[1];
        } else if (numberToText[1] + numberToText[2] == 10) {
            numberAsText += ' ' + dozens[0];
        } else if (numberToText[1] + numberToText[2] == 00) {
            numberAsText += '';
        } else if (numberToText[2] == 0) {
            numberAsText += ' ' + dozens[numberToText[1] - 1];
        }
    } else if (numberToText.length === 2) {
        if (numberToText[1] == 0) {
            numberAsText += dozens[numberToText[0] - 1];
        } else if (numberToText[1] != 0 && numberToText[0] == 1) {
            numberAsText += gaps[numberToText[1] - 1];
        } else {
            numberAsText += dozens[numberToText[0] - 1] + ' ' + units[numberToText[1]]
        }
    } else if (numberToText.length === 1) {
        if (numberToText[0] == 0) {
            numberAsText += units[10];
        } else {
            numberAsText += units[numberToText[0]];
        }
    }
    return numberAsText.length < 20 ? numberAsText : number;
}
