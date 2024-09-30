export const addTodo = (dispatch, todoText) => {
    if (todoText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: todoText });
    }
  };
  
  export const removeTodo = (dispatch, todoId) => {
    dispatch({ type: 'REMOVE_TODO', payload: todoId });
  };
  