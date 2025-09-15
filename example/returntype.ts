function func() {
    return 'helo'
}


type returnFunc = ReturnType<typeof func>

const func2 = (foo:string, obj: { bar: number; bas: boolean }) => {

}

type ParamsFunc = Parameters<typeof func2>


const getUser = () => {
    return Promise.resolve({
        id: '123',
        name: 'john',
        email: 'john@example.com'
    })
}

type ReturnVal = Awaited<ReturnType<typeof getUser>>