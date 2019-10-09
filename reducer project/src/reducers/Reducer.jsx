export const initialState = [
  {
    item: "Make dinner",
    completed: false,
    id: 1
  },

  {
    item: "Take out trash",
    completed: false,
    id: 2
  },

  {
    item: "Clean closet",
    completed: false,
    id: 3
  }
];

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      return [
        ...state,
        {
          item: action.payload,
          completed: false
        }
      ];

    case "RemoveTodo":
      let remove = state.filter(todo => {
        if (todo.completed === true) {
          return !todo.completed;
        } else {
          return todo;
        }
      });
      return remove;

    case "SelectTodo":
      let select = state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
      return select;

    default:
      return state;
  }
};
