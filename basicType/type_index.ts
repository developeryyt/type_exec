/*
* 타입 별칭
* */

type Player = {
    position: string
    foot: string
    star: number
}

// type Player3 = {
//     position: string
//     foot: string
//     star: number
// }

let player:Player  = {
    position: 'fw',
    foot: 'right',
    star: 4
}

let player2: Player = {
    position: 'lb',
    foot: 'left',
    star: 4
}

// Index signature

type CountryCodes = {
    [key: string]: string
}

let countryCodes: CountryCodes = {
    kr: 'korea',
    jp: 'japan',
    cn: 'china',
    us: 'usa'
}