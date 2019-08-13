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


type BoolOptions = 'debug' | 'trace' | 'performance';
type StrOptions = 'application-name' | 'api-url';

type BoolConfig = { [K in BoolOptions]: boolean };
type StrConfig = { [K in StrOptions]: string };

type Config = Readonly<BoolConfig & StrConfig>;

const config: Config = {
    debug: true,
    trace: true,
    performance: true,
    "api-url": "http://localhost:8080",
    "application-name": "TS",
}
