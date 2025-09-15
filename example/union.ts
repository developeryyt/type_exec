//Discriminated union example
type A = | { type: 'a'; a: string } | { type: 'b'; b: string } | { type: 'c'; c: string, d: string };


type B = "a" | "b" | "c"

type F = { [K in B]: K}

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


interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}

type AttributeGetters = {
    [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
}

type Route =
    | {
    route: "/";
    search: {
        page: string;
        perPage: string;
    };
}
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

type Search = Route['search']

type RoutesObject = {
    [K in Route as K['route']] : K['search']
};


const routes: RoutesObject = {
    "/": { page: "1", perPage: "10" },
    "/about": {},
    "/admin": {},
    "/admin/users": {}
}



interface Values {
    email: string;
    firstName: string;
    lastName: string;
}

type ValuesAsUnionOfTuples = {
    [K in keyof Values]: [K, Values[K]]
}[keyof Values]


interface FruitMap {
    apple: "red";
    banana: "yellow";
    orange: "orange";
}

type TransformedFruit = {
    [K in keyof FruitMap]: FruitMap[K]
}


