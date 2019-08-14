export interface User {
    id?: string;
    name: string;
    email: string | null;
}

export type ConstantUser = Readonly<User>;

export type PartialUser = Partial<User>;

export type RequiredUser = Required<User>;

export type UserId = Pick<RequiredUser, "id">;

export type InsertUser = Omit<User, "id">;



export function aLotOfArguments(a: string, b: number, c: boolean): boolean {
    return true;
}

export type Arguments = Parameters<typeof aLotOfArguments>;  // [string, number, boolean]

const fnArguments: Arguments = ["a", 2, true]; // as const;

aLotOfArguments(...fnArguments);
