type UnpackPromise<T> = 
    T extends Promise<infer A> ? A : never;
    
type PromiseStr = Promise<string>;

type Unpacked = UnpackPromise<PromiseStr>;
type Unpacked2 = UnpackPromise<number>;


function processText<T extends string | null>(text: string | null): 
    T extends string 
        ? string 
        : null {
    return text && text.toUpperCase() as any;
}

processText("");
