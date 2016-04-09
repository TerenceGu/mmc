/**
 * Created by fed on 16/4/8.
 */
export const addTodoItem = content => {
  return {
    type: 'TODO_LIST_ADD_ITEM',
    content
  }
};

export const setNewItemVisibility = shouldShow => {
    return {
      type: 'TODO_LIST_ADD_ITEM_VISIBILITY',
      shouldShow
    }
};

export const removeTodoItem = index => {
  return {
    type: 'TODO_LIST_REMOVE_ITEM',
    index
  }
};