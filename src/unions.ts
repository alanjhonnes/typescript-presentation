export interface User {
    id: string;
    name: string;
}

type PossibleUser = User | null;

function isAnonymous(currentUser: PossibleUser): boolean {
    return currentUser === null;
}
