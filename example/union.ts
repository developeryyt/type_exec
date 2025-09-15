//Discriminated union example
type A = | { type: 'a'; a: string } | { type: 'b'; b: string } | { type: 'c'; c: string, d: string };


type B = "a" | "b" | "c"

enum C {
    a,
    b,
    c
}

interface Person {
    name: string;
    age: number
}

type Animal = {
    name: string;
    age: number;
    color: string;
    breed: string
}

type AgeType = Animal['age']


// type D = Exclude<Animal,>


