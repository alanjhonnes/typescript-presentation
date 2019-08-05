export interface Player {
    name: string;
}

export interface Location {
    x: number;
    y: number;
}

export type PlayerWithPosition = Player & Location;


function test(playerWithPosition: PlayerWithPosition): void {
    playerWithPosition.;
}


export interface ObjectWithNumericId {
    id: number;
}

export interface ObjectWithStringId {
    id: boolean;
}

export type ObjectWithId = ObjectWithNumericId & ObjectWithStringId;

const x: ObjectWithId  = {
   id: 5 as any, 
}
