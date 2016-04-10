/**
 * Created by fed on 16/4/8.
 */
export const addTodoItem = content => (
  {
    type: 'TODO_LIST_ADD_ITEM',
    content
  }
);

export const setNewItemVisibility = shouldShow => (
  {
    type: 'TODO_LIST_ADD_ITEM_VISIBILITY',
    shouldShow
  }
);

export const removeTodoItem = index => (
  {
    type: 'TODO_LIST_REMOVE_ITEM',
    index
  }
);
