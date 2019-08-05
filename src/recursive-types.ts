export interface Node {
    id: string;
    parent: string | null;
    children?: Node[];
}


const root: Node = {
    id: '1',
    parent: null,
    children: [
        {
            id: '2',
            children: [],
            parent: '1'
        }
    ]
}











interface RootNode {
    id: string;
    parent: null;
    children: ChildrenNode[];
}

interface MiddleNode {
    id: string;
    parent: string;
    children: ChildrenNode[];
}

interface LeafNode {
    id: string;
    parent: string;
    children: null;
}

type BetterNode = RootNode | MiddleNode | LeafNode;
type ChildrenNode = MiddleNode | LeafNode;

function iterateNode(node: BetterNode) {
    if(node.children === null) {
        return "end iteration";
    }
    console.log(`iterating on id ${node.id}`);
    node.children.forEach(iterateNode);
}
