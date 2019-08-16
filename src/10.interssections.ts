export interface Player {
    name: string;
    bool: true;
}

export interface Location {
    name: string;
    x: number;
    y: number;
    bool: false;
}

export type PlayerWithPosition = Player & Location;

function test(playerWithPosition: PlayerWithPosition): void {
    playerWithPosition.bool;
}


export interface ObjectWithNumericId {
    id: number;
}

export interface ObjectWithBoolId {
    id: boolean;
}

export type ObjectWithId = ObjectWithNumericId & ObjectWithBoolId;

const x: ObjectWithId = {
    id: 5,
}
