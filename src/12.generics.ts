export function identity(value: any): any {
    return value;
}


const testGeneric = identity("");







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

export const x = makeTrackedEntity({
    a: 'a',
    b: true,
});
