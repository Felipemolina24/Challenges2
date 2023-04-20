export const TodoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] ADD TODO':
            return [...initialState, action.payload]
        case '[TODO] TOGGLE TODO':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                } else {
                    return todo;
                }
            });
        default:
            return initialState;
    }
};
