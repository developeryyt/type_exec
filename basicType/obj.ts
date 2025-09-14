/*
* Object type
* */

let person: {
    name: string;
    age?: number; // Optional property
} = {
    name: 'kim',
    age: 20
}

// type User = {
//     name: string;
//     age: number;
//     id: number;
// }


// let user: Omit<User, 'id'>  = {
//     name: 'kim',
//     age: 30
// }


type Person = {
    name: string
    age: number
}


let person1 = {} as Person

person1.name = 'kim'
person1.age = 20


type Dog = {
    name: string
    color: string
}

let dog = {
    name: 'brown',
    color: 'white',
    breed: '진도'
} as Dog

/*
* 타입 단언의 규칙
* 값 as 단언 <- 단언식
* A as B
* A가 B의 슈퍼타입
* A가 B의 서브타입이어야함
* */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

let cat = {
    name: '야옹이',
    color: 'Yellow'
} as const








