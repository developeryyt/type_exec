enum Role {
    PROTOSS,
    ZERG,
    TERRAN
}


const player1 = {
    team: 'protoss',
    point: Role['PROTOSS']
}

const player2 = {
    team: 'zerg',
    point: Role['ZERG']
}

const player3 = {
    team: 'terran',
    point: Role['TERRAN']
}


console.log(player1, player2, player3)