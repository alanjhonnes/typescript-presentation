interface User {
    id: string;
    name: string;
}

function isUser(value: any): value is User {
    return "id" in value && "name" in value;
}

function isDefined<T>(value: T | null | undefined): value is T {
    return value !== undefined;
} 


function test(value: string | number | null | undefined) {
    if(isDefined(value)) {
        value; // string | number
    }
}

let x: string | number | null | undefined = "5";

if(isDefined(x)) {
    x
}
