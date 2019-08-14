enum TODO_ACTION_TYPE {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
}

interface Todo {
    id: string;
    title: string;
    description: string;
}

interface AddTodoAction {
    readonly type: TODO_ACTION_TYPE.ADD_TODO;
    readonly payload: Todo;
}

interface RemoveTodoAction {
    readonly type: TODO_ACTION_TYPE.REMOVE_TODO;
    readonly payload: { todoId: string }
}

type TodoAction =
    | AddTodoAction
    | RemoveTodoAction

interface State {
    readonly todos: ReadonlyArray<Todo>;
}

function todoReducer(state: State, action: TodoAction): State {
    switch (action.type) {
        case TODO_ACTION_TYPE.ADD_TODO: {
            return {
                todos: state.todos.concat(action.payload),
            }
        }
        case TODO_ACTION_TYPE.REMOVE_TODO: {
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.todoId),
            }
        }
    }
    return state;
}

const removeTodoAction: RemoveTodoAction = {
    type: TODO_ACTION_TYPE.REMOVE_TODO,
    payload: { todoId: '1' }
}

export type EnumLiteral<T> = keyof ;
