console.log("Занятие 4")


// сложение
console.log("Число" + true);  // String + Boolean
console.log("Число:" + 1);      //  String + Number
console.log(true + 1);         // Boolean + Number

// умножение
console.log('2' * true)       // String * Boolean
console.log('2' * 6)          //  String * Number
console.log(true *2)          // Boolean + Number

// деление
console.log('6' / true)       // String * Boolean
console.log('6' / 6)          //  String * Number
console.log(true / 2)          // Boolean + Number

// явное преобразование(number, string, boolean)

// преобразуем string в number
let str = "123";
console.log(typeof str); // string
let num = Number(str); // становится числом 123
console.log(Number(str)); 

// преобразуем string в boolean
console.log (Boolean("ПРивет!"))
console.log (Boolean(""))

// преобразуем boolean в number
console.log(Number(false))
console.log(Number(true))

// преобразуем boolean в string
console.log (String(true))
console.log (String(false))


// преобразуем number в boolean
console.log (Boolean(0))
console.log (Boolean(1))
console.log (Boolean(2))

// преобразуем number в string
console.log(String(123))
console.log(String(0))



