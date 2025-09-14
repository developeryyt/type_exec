type Admin = {
    name: string;
    kickCount: number;
}

type Member = {
    name: string;
    point: number;
}

type Guest = {
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest


function login(user: User) {

    if('kickCount' in user) {

    }

}