export function aLotOfArguments(a: string, b: number, c: boolean): boolean {
    return true;
}

export type Arguments = Parameters<typeof aLotOfArguments>;  // [string, number, boolean]

const fnArguments: Arguments = ["a", 2, true]; // as const;

aLotOfArguments(...fnArguments);
