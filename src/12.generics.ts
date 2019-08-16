export function identity<T>(value: T): T {
    return value;
}


const testGeneric = identity("dsfsd");







export interface TrackedEntity<E> {
    id: string;
    data: E;
}

export function makeTrackedEntity<E>(entity: E): TrackedEntity<E> {
    return {
        id: '1',
        data: entity,
    }
}

export const x = makeTrackedEntity<string>("sdkfj");

x.data.b