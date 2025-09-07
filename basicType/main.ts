/*
* Array Types
* */

let numArr: number[] = [1,2,3]
let strArr: string[] = ['a','b','c']

let boolArr: Array<boolean> = [true, false, true]
let multiArr: (string | number)[] = [1, 'hello']

//다차원 배열의 타입
let doubleArr: (number | string)[][] = [
    [1,2,3,4,5],
    [6,7],
    ['a']
]

let doubleArr1: Array<string | number>[] = [
    [1,2,3,4,5],
    [6,7],
    ['a']
]

/*
* Tuple
* 길이와 타입이 고정된 배열
* */

let tup1: [number, number] = [1,2]
// let tup2: [number, number, string[]] = [1, 3, ['kim']]
let tup2: [number, number, string[] ] = [1, 3, ['kim']]

// tup2.push(['iki'])

// const users: [string,number][] = [
//     ['kim', 123],
//     ['park', 456],
//     ['lee', 789]
// ];









