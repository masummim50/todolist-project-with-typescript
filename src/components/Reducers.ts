import { useReducer } from "react";
export interface ItodoObject {
  id: number;
  text: string | undefined;
  completed: boolean;
}
export interface Iaction {
  type: string;
  payload: ItodoObject;
}
export const initialstate = [];
export const reducer = (state: ItodoObject[], action: Iaction) => {
  switch (action.type) {
    case "submit":
      if(action.payload.text === ''){
        alert('write something');
        return state;
      }else{
      const newstate = [...state, action.payload]
      return newstate;
      }
    case 'completed':
      const ind =  state.findIndex(i => i.id === action.payload.id);
      const copyarray = [...state]
      copyarray[ind] = {...copyarray[ind], completed:!copyarray[ind].completed}
      return copyarray;
    case 'delete':
      const filtered = state.filter(item=> item.id!== action.payload.id);
      return filtered;
    default:
      return state;
  }
};

//   export const [state, dispatch ] = useReducer(reducer, []);
