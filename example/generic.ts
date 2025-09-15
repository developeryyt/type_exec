const returnWhatIPassIn = <T>(t: T): T => {
    return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");


const returnBothOfWhatIPassIn = <T1 extends string, T2 extends number>(params: { a: T1; b: T2 }) => {
    return {
        first: params.a,
        second: params.b,
    };
};


returnBothOfWhatIPassIn({
    a: 'hello',
    b: 123
})


type CreateDataShape<T,V extends Error> = {
    data: T;
    error: V;
};

type CreateDataShape2<TData, TError = undefined> = {
    data: TData;
    error: TError;
};

class Component<T> {
    constructor(private props: T) {
    }

    getProps = () => this.props;
}

type GetParametersAndReturnType<T extends (...args: any) => any> = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
};


type Maybe<T extends {}> = T | null | undefined;

type NonEmptyArray<T> = [T, ...Array<T>];

const arrays = [
    {
        name: "Park",
    },
    {
        name: "Kim",
    },
];

const obj = arrays.reduce((accum, item: {name: string}) => {
    accum[item.name] = item;
    return accum;
}, {} as Record<string, { name: string }>)

// type C = Record<string, { name: string }>

const fetchData = async <T>(url: string) => {
    const data: T = await fetch(url).then((response) => response.json());
    return data;
};