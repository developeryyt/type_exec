/*
* 타입 좁히기
* Using Conditional Statements to Narrow Types
* */

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string: toUpperCase
// value => Person: name은 age살입니다.
function func(value: number | string | Date | Person | null) {

    if(typeof value === 'number') {
        console.log(value.toFixed())
    }else if(typeof value === 'string') {
        console.log(value.toUpperCase())
    }else if(value instanceof Date) {

    }else if(value && ('age' in value || 'name' in value)) {
        
    }
}

