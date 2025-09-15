const data = {
    foo: 'bar',
    bar: 12,
    baz: true
}

type DataType = typeof data
type FooType = DataType['foo']
type BarType = DataType['bar']
type BazType = DataType['baz']

export type Event =
    | {
    type: "click";
    event: MouseEvent;
}
    | {
    type: "focus";
    event: FocusEvent;
}
    | {
    type: "keydown";
    event: KeyboardEvent;
};

type EventType = Event['type'];

export const Color = {
    Red: "red",
    Green: "green",
    Blue: "blue",
} as const;

enum ColorEnum {
    Red,
    Green,
    Blue
}

type ColorType = typeof Color['Red' | 'Blue']
type valueType = typeof Color[keyof typeof Color]

type Red = typeof Color['Red']
type Green = typeof Color['Green'];
type Blue = typeof Color['Blue'];


const rgb = ['red', 'blue', 'green'] as const

type RedAndBlue = typeof rgb[0 | 1]
type RGB = typeof rgb[number]



interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}

const post: Post = {
    title: 'Hello World',
    content: 'This is my first post',
    author: {
        id: 1,
        name: 'John Doe'
    }
}

type Author = Post['author']

function printAuthorInfo(author: Author) {
    console.log(`Author ID: ${author.id}, Author Name: ${author.name}`);
}


type Fruit =
    | {
    name: "apple";
    color: "red";
}
    | {
    name: "banana";
    color: "yellow";
}
    | {
    name: "orange";
    color: "orange";
};

type TransformedFruit = {
    [R in Fruit as R['name']] : `${R['name']}:${R['color']}`
}[Fruit['name']]


// const checkType: TransformedFruit = {
//     apple: 'red'
// }




