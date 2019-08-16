export interface User {
    id: string;
    name: string;
}

export function isUser(value: any): value is User {
    return "id" in value && "name" in value;
}

export const user: any = {};
if (isUser(user)) {
    user
};

export function isDefined<T>(value: T | null | undefined): value is T {
    return value !== undefined && value !== null;
}

let someVar: string | null | undefined = 'x' as any;

if (isDefined(someVar)) {
    someVar.big
}


export function test(value: string | number | null | undefined) {
    if (isDefined(value)) {
        value; // string | number
    }
}

let x: string | number | null | undefined = "5";

if (isDefined(x)) {
    x
}
