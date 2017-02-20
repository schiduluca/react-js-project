import dispatcher from "../Dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type : "CREATE_TODO",
        text
    });
}

export function fetchData() {
    dispatcher.dispatch({
        type : "FETCH_DATA"
    });
}

export function search(text) {
    dispatcher.dispatch({
        type : "SEARCH_ITEMS",
        text
    })
}