export type UnpackPromise<T> = 
    T extends Promise<infer A> ? A : never;
    
export type PromiseStr = Promise<string>;

export type Unpacked = UnpackPromise<PromiseStr>;
export type Unpacked2 = UnpackPromise<number>;


export function processText<T extends string | null>(text: T): 
    T extends string 
        ? string 
        : null {
    return text && text.toUpperCase() as any;
}

export const x = processText("dfg");
