// Задание 1. ГОТОВО ЗАДАНИЕ! Напишите функцию, которая принимает массив строковых представлений чисел и
//форматирует их в виде валюты (например, из '1234' в '$1,234.00'). Функция
//должна корректно обрабатывать некорректные входные данные и возвращать для
//них понятную пользователю ошибку.



function formatCurrency(arr) {
    return arr.map(item => {
        const num = parseFloat(item);
        if (isNaN(num)) {
            return `Ошибка: "${item}" некорректные входные данные. Введите число.`;
        }
        return `${num.toLocaleString(
            'en-US', {style: 'currency', currency: "USD"})}`;
    });
}


const dannie = ["123456789", "5625825,2", "алфавит", "100.00", "true"];
console.log(formatCurrency(dannie));


// Задание 2. ГОТОВО ЗАДАНИЕ! Создайте функцию, которая принимает массив произвольных значений, удаляет
// все falsy значения, а затем возвращает массив, отсортированный в порядке убывания.

function filterAndSort(arr) {
    return arr.filter(Boolean).sort((a, b) => b - a); // Falsy значения - Boolean
}

const valueArray = [100, 450, false, 3, null, 5, '', 2, 888];
console.log(filterAndSort(valueArray));


// 3. ГОТОВО ЗАДАНИЕ! Напишите функцию, которая принимает массив объектов с полями name и age, и
// группирует их в объект, где ключи — это возраст, а значения — массивы имен
// людей этого возраста.

  const people = [
    { name: 'Ульяна', age: 4 },
    { name: 'Пётр', age: 31 },
    { name: 'Анастасия', age: 32 },
    { name: 'Сергей', age: 58 },
    { name: 'Валентина', age: 58 }
  ];
  
  function groupInObject(arr) {
    return arr.reduce((acc, person) => {
        const { age, name } = person;
        if (!acc[age]) {
            acc[age] = [];
        }
        acc[age].push(name);
        return acc;
    }, {});
}

console.log("Ключи — это возраст, в массиве имена людей, которые соотвествуют этому возрасту" , groupInObject(people));

// 4. ГОТОВО ЗАДАНИЕ! 4. Напишите функцию isPalindrome, которая проверяет, является ли заданная строка
// палиндромом. Палиндром — это слово, фраза или последовательность, которые
// читаются одинаково как в прямом, так и в обратном порядке (без учета пробелов,
// знаков препинания и регистра). Игнорируйте пробелы и знаки препинания, а строки
// из одного символа следует считать палиндромами.

function isPalindrome(str) {
    const clearData = str
    .replace(/\s+/g, '')         // Убираем учет пробелов
    .toLowerCase()        // Убираем учет регистра 
    .replace(/[\W_]/g, '') // Убираем учет знаков препинания


    const reversedData = clearData.split('').reverse().join('');
    return clearData === reversedData;
}

console.log(isPalindrome("Тут, как тут"));         
console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("Hello World")); 
console.log(isPalindrome("привет"));



// 5. ГОТОВО ЗАДАНИЕ! Создайте функцию, которая принимает массив, содержащий числа или массивы
//чисел любой вложенности, и возвращает сумму всех чисел в массиве. В массиве
//вложенности внутри могут быть любые типы данных, в том числе массивы.

function sumNumbersArrays(arr) {
    let sum = 0;

    function sumNumbers(item) {
        if (Array.isArray(item)) {
            item.forEach(sumNumbers);
        } else if (typeof item === 'number') {
            sum += item;
        }
    }

    sumNumbers(arr);
    return sum;
}

const massif = [1, 'привет', [2, 3, true, [12, 15]], [100, 2000]];
console.log('Сумма всех чисел в массиве', sumNumbersArrays(massif)); 


// 6. ГОТОВО ЗАДАНИЕ! Напишите функцию, которая принимает массив объектов и функцию для
// сравнения элементов. Функция должна возвращать новый массив, содержащий
// только последние уникальные элементы согласно предоставленной функции
// сравнения. 

function uniqueByComparator(arr, comparator) {
    const uniqueElements = [];
    const seen = new Set();

    for (let i = arr.length - 1; i >= 0; i--) {
        const item = arr[i];
        const isDuplicate = uniqueElements.some(uniqueItem => comparator(uniqueItem, item));

        if (!isDuplicate && !seen.has(item)) {
            uniqueElements.unshift(item);
            seen.add(item);
        }
    }

    return uniqueElements;
}

// Функция сравнения: Эта функция принимает два аргумента (два
// объекта из массива) и возвращает true, если они считаются эквивалентными для
// целей уникальности, и false в противном случае.

const comparator = (a, b) => a.id === b.id; // Сравниваем по id

const items = [
    { id: 1, color: "red" },
    { id: 2, color: "yellow" },
    { id: 3, color: "green" },
    { id: 1, color: "red" },
    { id: 2, color: "yellow" }
  ];

const uniqueItems = uniqueByComparator(items, comparator);
console.log(uniqueItems);



//7. ГОТОВО ЗАДАНИЕ! Напишите функцию, которая принимает массив строк и функцию преобразования.
//Функция должна возвращать объект, где ключи — это исходные строки, а значения
//— результаты применения функции преобразования к каждой строке. Эта функция
//принимает одну строку и возвращает новое значение, которое может быть числом,
//другой строкой, объектом или любым другим типом данных.

// Функция, которая принимает массив строк
function transformArrayToObject (arr, transformFunction) {
    const result = {};

    arr.forEach(string => {
        result[string] = transformFunction(string);
    });

    return result;
}

// Функция преобразования
function transformString (string) {
    return string.length;            // возвращаем длину строки
}

const strings = ['преобразование', '123456', 'false', "HelloWorld"];

const transformedObject = transformArrayToObject(strings, transformString);
console.log(transformedObject);


// 8. ГОТОВО ЗАДАНИЕ! Создайте асинхронную функцию, которая принимает массив функций,
// возвращающих промисы. Функция должна выполнять все промисы параллельно и
// возвращать массив результатов в том порядке, в котором были переданы функции.

async function executePromises(funcArray) {
    const results = await Promise.all(funcArray.map(func => func()));
    return results;
}

const promise1 = () => 
    new Promise(resolve => setTimeout(() => 
        resolve("один"), 3000));      // Задержка в 3 секунды
const promise2 = () => 
    new Promise(resolve => setTimeout(() => 
        resolve("два"), 1000));        // Задержка в 1 секунду
const promise3 = () => 
    new Promise(resolve => setTimeout(() => 
        resolve("три"), 2000));       // Задержка в 2 секунды

executePromises([promise1, promise2, promise3])
    .then(results => console.log(results)); 



// 9. ГОТОВО ЗАДАНИЕ! Напишите программу для печати таблицы умножения в консоли для чисел от 1 до 10 со следующими дополнительными требованиями:
// Программа должна печатать таблицу умножения в выровненном формате
// (например, таблица со строками и столбцами).
// Таблица должна отображать результаты для чисел от 1 до 10, умноженных на 1 до 10 (т. е. таблица 10x10).
// После печати таблицы умножения программа должна также печатать сумму каждой строки и столбца.
// Программа должна позволять пользователю вводить пользовательский диапазон
// чисел (например, от 1 до n, где n может быть любым числом, указанным пользователем).

// Программа должна печатать общую сумму всех значений в таблице после печати таблицы.
// Обрабатывать крайние случаи, например, когда пользователь вводит значение
// меньше 1 (должно отображаться сообщение об ошибке или сообщение).
// Если пользователь вводит нецелое значение для n, программа должна отображать
// предупреждение и запрашивать допустимое число.

// Решение

function multiplicationTable(n) {
    if (n < 1 || !Number.isInteger(n)) {
      console.log("Ошибка: введите целое число больше 0.");
      return;
    }
  
    const table = [];
    const rowSums = Array(n).fill(0);
    const colSums = Array(n).fill(0);
    let totalSum = 0;
  
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++) {
        const product = i * j;
        row.push(product);
        totalSum += product;
        rowSums[i - 1] += product;
        colSums[j - 1] += product;
      }
      table.push(row);
    }
  
    console.log("x | " + Array.from({ length: n }, (_, i) => i + 1).join(" "));
    console.log("-".repeat(4 + 2 * n));
    
    table.forEach((row, i) => {
      console.log(`${i + 1} | ${row.join(" ")}`);
    });
  
    console.log("-".repeat(4 + 2 * n));
    console.log("Сумма строк: " + rowSums.join(" "));
    console.log("Сумма столбцов: " + colSums.join(" "));
    console.log("Общая сумма всех значений в таблице: " + totalSum);
  }
  
  
  const userInput = prompt("Введите целое число больше 0:");
  const n = parseInt(userInput);
  multiplicationTable(n);

// 10. ГОТОВО ЗАДАНИЕ! Создайте цепочку из трех промисов. Пусть первый промис вернет число. 
// Сделайте так, чтобы каждый последующий промис возводил в квадрат результат
// предыдущего промиса через 3 секунды. После окончания манипуляций выведите
// на в консоль получившийся номер.

const firstPromise = new Promise((resolve) => {
    resolve(3); // Первый промис возвращает число 3
});


const secondPromise = firstPromise.then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result ** 2); // Возводим в квадрат
        }, 3000);                 // Задержка в 3 секунды
    });
});

const thirdPromise = secondPromise.then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result ** 2); // Возводим в квадрат снова
        }, 3000);                 // Задержка в 3 секунды
    });
});

thirdPromise.then((finalResult) => {
    console.log('Результат цепочки промисов', finalResult); // Выводим результат в консоль
});








