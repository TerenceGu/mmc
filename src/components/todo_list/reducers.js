/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  addItemVisible: false,
  todoList: ['hello']
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TODO_LIST_ADD_ITEM_VISIBILITY':
      return Object.assign({}, state, {
        addItemVisible: action.shouldShow
      });
    case 'TODO_LIST_ADD_ITEM':
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.content]
      });
    case 'TODO_LIST_REMOVE_ITEM':
      return Object.assign({}, state, {
        todoList: [...state.todoList.slice(0, action.index),
          ...state.todoList.slice(action.index + 1)]
      });
    case 'TODO_LIST_INIT':
      return Object.assign({}, state, {
        todoList: action.value.todoList
      });
    default:
      return state;
  }
};
