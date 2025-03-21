// 1. Написать функцию которая будет эмулировать игру в кубики, заданное количество игроков по очереди бросают кубик, 
// каждый в итоге бросает одинаковое количество раз 
// (должно работать с любым количеством раз заданным в переменной).
// У кого сумма набранная будет наибольшей - тот выиграл. 
// Если суммы равны то ничья. Выведите результаты в консоль.


function playKubiki(numIgr, znachBroska) {
    let result = [];                               // Создаем пустой массив, где будем хранить результат
           
   for (let i = 0; i < numIgr; i++) {     // Номер игрока 
        result[i] = 0;
    }
           
               // Опиываем броски кубиков
    for (let znach = 0; znach < znachBroska; znach++) {
        for (let igr = 0; igr < numIgr; igr++) {
            // Генерация рандомного числа от 1 до 6 (так как результат броска кубика до 6)
            let randZnach = Math.floor(Math.random() * 6) + 1;
            result[igr] += randZnach; // Добавляем результат броска к сумме игрока
        }
   }
           
               // Находим победителя по броскам
    let maxresult = Math.max(...result); // Наибольшая сумма значений в броске Math.max
    let winners = []; // Создаем массив для хранения победителей
           
    for (let i = 0; i < numIgr; i++) {
        if (result[i] === maxresult) {
            winners.push(`Игрок ${i + 1}`); // Добавляем игрока к победителям
         }
    }
           
    if (winners.length === 1) {
        return `Выйграл: ${winners[0]} с ${maxresult} очками.`;
    } else {
        return `Ничья`;
    }
 };
           
          
console.log(playKubiki(10, 5)); //  количество игроков 10 и бросков 5    

       

// 2. Написать функцию которая будет разбивать число на заданное количество 
// рандомных чисел сумма которых будет равна изначальному числу. 
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - 
// Ваш код должен работать с любым числом заданным в переменной (не только с 15) и 
// с любым количеством частей на которые надо разбить число..

// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

function delenieNaCelieChasti(chislo, chasti) {
   
    let result = [];
    let sum = 0;

    for (let i = 0; i < chasti - 1; i++) {

        // Генерация случайного числа от 1 до указанного

        let randomNumber = Math.floor(Math.random() * (chislo - sum - (chasti - i - 1))) + 1;
        result.push(randomNumber);
        sum += randomNumber;
    }
    
    // Добавляем оставшуюся часть к последнему элементу
    result.push(chislo - sum);

    return result;
}

// Пример использования
console.log(delenieNaCelieChasti(21, 3));      // Указываем первое  - число 21, второе - количество разбиений 3


// б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)

function delenieNaDrobnieChasti(chislo1, chasti1) {
   
    let result = [];
    let sum = 0;

    for (let i = 0; i < chasti1 - 1; i++) {
        // Генерация случайного дробного числа
        let randomNumber = Math.random() * (chislo1 - sum - (chasti1 - i - 1));
        randomNumber = Math.round(randomNumber * 100) / 100; // Округление до 2 знаков после запятой
        result.push(randomNumber);
        sum += randomNumber;
    }
    
   
    result.push(parseFloat((chislo1 - sum).toFixed(2))); // Округление последнего числа

    return result;
}

// Пример использования
console.log(delenieNaDrobnieChasti(10, 3)); 


//3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня. 
// Ваш код должен иметь возможность считать количество дней 
// на любую заданую в переменной первоначальную дату и считать верно через 10-15-20 лет

function friday13(startDate) {
    let count = 0;
    let finishDate = new Date();
      
    for (let date = new Date(startDate); date <= finishDate; date.setDate(date.getDate() + 1)) {
        if (date.getDate() === 13 && date.getDay() === 5) {                    // 5й день недели - Пятница
            count++;
        }
    }

    return count;
}

let  result = friday13('1992-01-01')
console.log(`Количество пятниц 13  : ${result}`);




