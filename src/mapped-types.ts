interface SomeObject {
    a: string;
    b: number;
    c: boolean;
}

type NullEverything<T> = {
    // [K in keyof T]: T[K];
    [P in "a" | "b"]: null;
}

type NullAllProps = NullEverything<SomeObject>
