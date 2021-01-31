// Компьютер загадывает четырехзначное число, в котором не повторяются цифры.
// Ваша задача — угадать его. Число ходов ограничено.
// Подсказками выступают «коровы» (если цифра угадана, а ее позиция — нет) и «быки» (когда совпадает и цифра,
// и ее позиция). Если загадано число «1234», а вы называете «6531» — результатом будет одна корова (цифра «1»)
// и один бык (цифра «3»).
//
// 1. Браузер генерирует число и приглашает пользователя в игру.
// 2. Выводится окно запроса предположения.
// 3. Браузер проверяет число и возвращает результат.
// 4. Так повторяется до тех пор, пока число не угадают.
// 5. Как только это случается, браузер сбрасывает количество попыток и генерирует новое число.


let numPC, arrYou, bulls, cows, tr, end, numYou;
allGame();

function allGame() {
    numYou = prompt('Введите четырехзначное число, у вас 10 попыток угадать число, которое загадал компьютер.');
    numPC = [];
    arrYou = [];
    bulls = 0;
    cows = 0;
    tr = 10;
    pcArr();
    game();
}

function pcArr() {
    let x;
    function rnd() {
        x = Math.floor(Math.random() * 10);
        return x;
    }

    for (let i = 0; i < 4; i++){
        numPC[i] = rnd();
    }
}

function game() {
    cows = 0;
    bulls = 0;
    while (tr >= 1) {
        yourArr(numYou);
        checkYouNumb();
        cows_bulls();
        if (tr === 1){
            alert('Вы проиграли. Компьютер загадал ' + numPC);
            allGame();
        } else if (bulls != 4){
            tr = tr - 1;
            numYou = prompt('Количество быков: ' + bulls +
                ', количество коров: ' + cows + '. У вас осталось ' + tr + ' попыт' + ending(tr) + '. Ваше число: ' + numYou +'. Попробуйте еще раз.');
            console.log(arrYou + ' ' + numPC + ' ' + cows + ' ' + bulls);
            arrYou = [];
            game();
        } else  if (bulls === 4) {
            alert('ПОЗДРАВЛЯЕМ! Вы победили! Компьютер загадал ' + numPC + '. Вы угадали с ' + (11 - tr) + ' попытки.');
            tr = 0;
            allGame();
        }
    }
}

function ending(e) {
    if (e >= 5 && e <=9){
        end = 'ок';
        return end;
    } else if (e >= 2 && e <= 4){
        end = 'ки';
        return end;
    } else if (e === 1){
        end = 'ка';
        return end;
    }
}

function yourArr(p) {
    for (let i = 0; i < 4; i++){
        let arrYouNumb = Number(p.substr(i,1));
        arrYou.push(arrYouNumb);
    }
}


function checkYouNumb() {
        if (numYou.length > 4){
            numYou = prompt('Вы ввели слишком большое число, пожалуйста введите число, состоящее из ЧЕТЫРЕХ цифр');
            checkYouNumb();
        } else if (numYou.length < 4) {
            numYou = prompt('Вы ввели слишком маленькое число, пожалуйста введите число, состоящее из ЧЕТЫРЕХ цифр');
            checkYouNumb();
        }
}

function cows_bulls() {
    for (let i = 0; i < 4; i++){
        if (arrYou[i] === numPC [i]){
            bulls++;
        } else {
            for (let j = 0; j < 4; j++){
                if (arrYou[i] === numPC [j]){
                    cows++;
                }
            }
        }
    }
}