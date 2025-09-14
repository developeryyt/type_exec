type A  = () => number;
type B = () => 10;


let a:A = () => 10;
let b:B = () => 10;



// 매개변수 호환
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}

d = c
c = d


// type Animal = {
//     name: string;
// }

// type Dog = {
//     name: string;
//     color: string;
// }

// let animalFunc = (animal: Animal) => {
//     console.log(animal.name)
// }

// let dogFunc = (dog: Dog) => {
//     console.log(dog.name)
//     console.log(dog.color)
// }


/*
* 사용자 정의 타입가드
* */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat

function warning(animal: Animal) {

    if("isBark" in animal) {

    }else if("isScratch" in animal) {

    }

}