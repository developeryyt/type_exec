
//제네릭 함수
function func<T>(value: T):T {
    return value
}

let a = func(10)
let b = func('hello')

// let arr = func([1,2,3] as [number, number, number])
let arr = func<[number, number, number]>([1,2,3])



function swap<T, U>(a:T,b:U) {
    return [b,a]
}

const [c,d] = swap(1,"hello")

function returnFirstvalue<T>(data: [T, ...unknown[]]): T {
    return data[0]
}

let num = returnFirstvalue([0,1,2])
// 0

let str = returnFirstvalue([1, 'hello', 'mynameis'])


function getLength<T extends { length: number } >(data: T) {
    return data.length
}

let var1 = getLength([1,2,3,4,5])
let var2 = getLength('hello world')
let var3 = getLength({length : 10})


// let c = [1,2,3].map(item => item * 3)

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = []

    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }

    return result;
}

map(arr, (it) => it * 2)


/*
* Interface of Generic
* */

interface KeyPair<K, V> {
    key: K,
    value: V
}

let keyPair: KeyPair<string, number> = {
    key: 'hello',
    value: 1234
}

interface NumberMap {
    [key: string]: number
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: 12313,
}


interface Maps<V> {
    [key: string]: V
}

let stringMap: Maps<string> = {
    asdkl: 'jello'
}

type Map2<V> = {
    [key: string]: V
}








