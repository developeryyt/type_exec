interface Person {
    name: string;
    age: number
}

function getPropertykey(person: Person, key: keyof Person) {
    return person[key]
}

const person: Person = {
    name: 'John',
    age: 30
}

console.log(getPropertykey(person, 'name'))

/*
* Mapped Types
* */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name'] : User[key]
}

function fetchUser(): User {
    return {
        id: 1,
        name: 'kim',
        age: 20
    }
}

function updateUser(user: User) {

}

updateUser({
    id: 1,
    name: 'kim',
    age: 25
})


type Events = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys = {
    [K in Events as Uppercase<K>] : string
};

type ObjectOfKeys2 = Record<Uppercase<Events>,string>


