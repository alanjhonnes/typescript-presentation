import { User } from "./14.type-guards";

export function aLotOfArguments(a: string, b: number, c: boolean): boolean {
    return true;
}
type AlotOfArgumentsFunction = typeof aLotOfArguments;

export type Arguments = Parameters<AlotOfArgumentsFunction>;  // [string, number, boolean]

const fnArguments: Arguments = ["a", 2, true]; // as const;

aLotOfArguments(...fnArguments);


const curriedFn = (a: string) => (b: string) => (c: string) => a + b + c;

const addA = curriedFn("a");
const addAB = addA("b");

const result = addAB('c');

const req = (url: string) => <T = any, R = any>(method: "GET" | "POST") => (payload: T) => {
    console.log(`${method} request to ${url} with data ${payload}`);
    return Promise.resolve({} as R);
}

const reqToGoogle = req("https://google.com/api");

const postUserToGetString = reqToGoogle<User, string>("POST");
const getGoogle = reqToGoogle<User, string>("GET");
const getGoogleAny = reqToGoogle("GET");

const resultPost = postUserToGetString({
    id: "1",
    name: ""
});
const resultGet = getGoogle({});

