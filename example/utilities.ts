/*
* Partial
* 특정 객체 타입의 모든 프로퍼티를 선택적 프로터피로 바꿔주는 타입
* Required
* 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
* Readonly
* */

interface Post {
    title: string;
    tags: string;
    content: string;
    thumbnail?: string
}

type Partials<T> = { [K in keyof T] ?: T[K]}

const draft: Partials<Post> = {
    title: '제목 나중에 짓자',
    content: 'dfsdfsdf',
}


interface Animal {
    name: string;
    breed: string;
    age?: number;
}


const a: Required<Animal> = {
    name: 'dog',
    breed: 'bulldog',
    age: 3
}

type RequiredType<T> = { [K in keyof T]-?: T[K]}

/*
* Readonly<T>
* 특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 바꿔주는 타입
* */

const readonlypost: Readonly<Post> = {
    title: 'hello',
    tags: 'welcome',
    content: 'this is content'
}

type ReadonlyType<T> = { readonly [K in keyof T]: T[K]}

// readonlypost.title = 'this is content'


/*
* Record<K, V>
* */

type ThumbnailLegacy = {
    large: {
        url: string
    },
    medium: {
        url: string
    },
    small: {
        url: string
    },
    watch: {
        url: string
    }
}

type keyTypes = 'large' | 'medium' | 'small' | 'watch'
type NewThumbnailTypes = Record<keyTypes, { url: string }>

