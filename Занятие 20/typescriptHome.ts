//1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

//2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейс Person, который будет соответствовать массиву

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// 3. Напишите анотации типов к этому классу.

export class ObjectManipulator<T extends object> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & Record<K, V>> {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}


// 4. Обеспечьте правильную типизацию для указанных функций.

export function map<T, R>(mapper: (item: T) => R, input?: T[]): ((subInput: T[]) => R[]) | R[] {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): ((subInput: T[]) => R[]) | R[] {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input!.map(mapper);
}

export function filter<T>(filterer: (item: T) => boolean, input?: T[]): ((subInput: T[]) => T[]) | T[] {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): ((subInput: T[]) => T[]) | T[] {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input!.filter(filterer);
}

export function add(a: number, b?: number): ((subB: number) => number) | number {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): number {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b!;
}