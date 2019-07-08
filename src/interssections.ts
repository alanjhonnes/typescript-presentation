interface Player {
    name: string;
}

interface Position {
    x: number;
    y: number;
}

type PlayerWithPosition = Player & Position;


function test(playerWithPosition: PlayerWithPosition): void {
    playerWithPosition.;
}
