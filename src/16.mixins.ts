import { v4 } from "uuid";

export type Constructor<T = {}> = new (...args: any[]) => T;


export function identifiable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        id = v4();
    }
}

interface NodeTyped {
    type: string;
}

export function changeableType<TBase extends Constructor<NodeTyped>(base: TBase) {
    return class extends base {
        setType(t: string) {
            this.type = t;
        }
    }
}

export class Node<T extends string> {
    constructor(public readonly type: T) {

    }
}

export const IdentifiableNode = identifiable(Node);

const idNode = new IdentifiableNode("square");


export function timestampable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        createdAt = new Date();
        updatedAt = new Date();

        setModified() {
            this.updatedAt = new Date();
        }
    }
}

export const TimedAndIdentifiedNode = timestampable(IdentifiableNode);

const timedAndIdentifiedNode = new TimedAndIdentifiedNode("square");

timedAndIdentifiedNode.setModified();

