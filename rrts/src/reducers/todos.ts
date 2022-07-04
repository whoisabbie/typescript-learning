import { 
  Todo,
  Action,
  ActionTypes
} from '../actions';

// below argument means state is going to be array of Todos
// if no data is passed take empty array as default value
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};