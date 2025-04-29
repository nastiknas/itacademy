
//1.Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
//со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
  
  
  function createFirstPromise(value) {
    return new Promise((resolve, reject) => {           
        const stay = Math.floor(Math.random() * (5000-1000) + 1000);   // Задержка от 1 до 5 секунд
        setTimeout(() => {
            resolve(value);
        }, stay);   
    });
}
const p1 = createFirstPromise(1);
const p2 = createFirstPromise(2);
const p3 = createFirstPromise(3);

async function playFirstPromise() {
    const result = await Promise.race([p1, p2, p3]);
    console.log(` Результат ${result}`);
}
playFirstPromise();

//2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, 
// которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.



function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (5-1) + 1);     // случайное число от 1 до 5
            resolve(random);
        }, 3000);        // Задержка в 3 секунды
    });
}
async function squaring() {
    const getNumResalt = await getNum();
    const getNumResaltSquare = getNumResalt * getNumResalt
    console.log(`Случайное число в квадрате ${getNumResaltSquare}`);
}
squaring();

// 3.Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата функции, 
// затем будет дожидаться результата второй функции, а затем найдет сумму полученных чисел и выводит на экран.

function getNumFirst() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (5-1) + 1); // случайное число от 1 до 5
            resolve(random);
        }, 3000);   // Задержка в 3 секунды
    });
}


function getNumSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (10-6) + 6); // случайное число от 6 до 10
            resolve(random);
        }, 5000);   // Задержка в 5 секунд
    });
}

async function addingTwoResults() {
    const numFirst = await getNumFirst();
    const numSecond = await getNumSecond();
    const sum = numFirst + numSecond;
    console.log(`Итого сумма результатов двух промисов: ${sum}`);
}

addingTwoResults();
