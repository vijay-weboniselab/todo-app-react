/* eslint-disable default-case */
const initialState = {
  todos: [
    // {
    //     id: 1,
    //     task: "Do somethings",
    //     date: new Date(),
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     task: "second task",
    //     date: new Date(),
    //     completed: true,
    //   }
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...action.payload],
      };
    case "DELETE":
      return {
        
        ...state, todos : action.payload
      };
    case "UPDATE":
      return {
          ...state, todos : action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
