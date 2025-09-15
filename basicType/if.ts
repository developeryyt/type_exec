interface Person {
    readonly name: string
    age ?: number
    sayHi: () => void
}



const person: Person = {
    name: 'patrick',
    age: 25,
    sayHi() {
    }
}


class Employee {

    public name: string;
    protected age: number;
    public position: string;
    private gender: string

    constructor(name: string, age: number, position: string, gender: string) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.gender = gender;
    }

    work() {
        console.log('일함')
    }
}


const employee = new Employee('kim', 30, 'developer', 'male')

// employee.gender = 'female'

