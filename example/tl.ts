type Path = `/${string}`

function makeUrl(path: Path) {
    return `https://example.com${path}`
}

//@ts-expect-error
makeUrl('user/1')

type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

type DynamicRoutes = `${string}/:id`
type StaticRoutes = Extract<Routes, DynamicRoutes>


type Top = "t-shirt" | "shirts" | "jacket";
type Bottom = "jeans" | "skirt" | "slacks";

type Outfit = `${Top} with ${Bottom}`


type First = 'user' | 'post' | 'comment'
type Second = 'Id' | 'Name'

type ObjectOfKeys = Record<`${First}${Second}`, string>