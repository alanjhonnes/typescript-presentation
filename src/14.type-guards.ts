export interface User {
    id: string;
    name: string;
}

export function isUser(value: any): value is User {
    return "id" in value && "name" in value;
}

export function isDefined<T>(value: T | null | undefined): value is T {
    return value !== undefined;
} 


export function test(value: string | number | null | undefined) {
    if(isDefined(value)) {
        value; // string | number
    }
}

let x: string | number | null | undefined = "5";

if(isDefined(x)) {
    x
}
