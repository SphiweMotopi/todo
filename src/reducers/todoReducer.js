import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialState = {
  nextId: 2,
  data: {
    1: {
      content: "Content 1",
      complete: false,
    },
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newId = state.nextId;
      const newTodo = {
        content: action.payload.text,
        complete: false,
      };
      return {
        nextId: newId + 1,
        data: {
          ...state.data,
          [newId]: newTodo,
        },
      };
    }
    case TOGGLE_TODO: {
      const id = action.payload.id;
      const updatedTodo = {
        ...state.data[id],
        complete: !state.data[id].complete,
      };
      return {
        ...state,
        data: {
          ...state.data,
          [id]: updatedTodo,
        },
      };
    }
    
    case EDIT_TODO: {
      const id = action.payload.id;
      const updatedTodo = {
        ...state.data[id],
        content: action.payload.newText,
      };
      return {
        ...state,
        data: {
          ...state.data,
          [id]: updatedTodo,
        },
      };
    }
    case REMOVE_TODO: {
      const id = action.payload.id;
      const updatedData = { ...state.data };
      delete updatedData[id];
      return {
        ...state,
        data: updatedData,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
