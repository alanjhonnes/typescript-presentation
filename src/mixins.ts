export class QueryBuilder<E extends object> {

    constructor(tableName: string, columns: Array<keyof E>) {

    }

    public createQuery(): this {
        
        return this;
    }
}

export class 
