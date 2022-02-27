import React, { Dispatch, RefObject } from "react";
import { Iaction } from "./Reducers";
import { ItodoObject } from "./TodoInputBox";

type Props = {
  todo: ItodoObject,
  dispatch: Dispatch<Iaction>,
  todotext: RefObject<HTMLInputElement>
};

const TodoList = ({ todo, dispatch, todotext }: Props) => {

  const edit = ()=> {
    if(todotext.current){
      todotext.current.value = `${todo.text}`;
    }
    dispatch({type:'delete', payload:todo});
    todotext.current?.focus()
  }
  const deleteTodo=()=> {
    dispatch({type:'delete', payload:todo})
  }
  return (
    <div
      className={`flex mt-2 ${todo.completed? "opacity-30": "opacity-100"}`}
    >
      <button
        onClick={() => dispatch({ type: "completed", payload: todo })}
        className="bg-green-400 p-2 rounded-lg"
      >
        Done
      </button>
      <p className="w-full my-auto p-4 bg-white text-black">
      {todo.text}
      </p>
      <button onClick={edit} className="bg-blue-400 p-3 rounded-lg">Edit</button>
      <button onClick={deleteTodo} className="bg-red-800 p-2 rounded-lg">Delete</button>
      
    </div>
  );
};

// import React, {useReducer, useState} from "react";
// // import { ItodoObject } from "./TodoInputBox";

// // type Props = {
// //   todo: ItodoObject,
// //   setTodo : (todo:ItodoObject[])=> void,
// //   todos: ItodoObject[]
// // };
// // const ACTIONTYPES = {
// //   COMPLETE: 'complete',
// //   EDIT: 'edit',
// //   DELETE: 'delete'
// // }

// // interface Iaction {
// //   type: string,
// //   payload: number
// // }

// const TodoList = ({ todo, setTodo, todos }: Props) => {

//   function reducer(state:ItodoObject[], action:Iaction){
//     switch(action.type){
//       case 'completed':
//         console.log('todos', todos)
//         console.log('state at the begiining', state)
//           const ind =  state.findIndex(i => i.id === action.payload);
//           const copyarray =  [...state];
//           copyarray[ind] = {...copyarray[ind], completed:!copyarray[ind].completed}
//           console.log('cop[y',copyarray)
//           console.log('state',state)
//           return copyarray;
//       case ACTIONTYPES.EDIT:
//         return state
//       case ACTIONTYPES.DELETE:
//         return state
//       default:
//         return state;
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, todos)

//   // const handleComplete = async (id:number)=> {
//   //   const ind =await todos.findIndex(i=> i.id === todo.id);
//   //   const copyarray = await [...todos];
//   //   copyarray[ind]= {...copyarray[ind], completed:!copyarray[ind].completed}
//   //   setTodo(copyarray)
//   // }

//   return (
//     <div className={`flex mt-2 ${todo.completed ? "opacity-30": "opacity-100"}`}>
//       <button onClick={()=> dispatch({type:'completed', payload: todo.id})} className="bg-green-400 p-2 rounded-lg">Done</button>
//       <p className="w-full my-auto p-4 bg-white text-black">
//         {todo.text}
//       </p>
//       <button className="bg-blue-400 p-3 rounded-lg">{`${todo.completed}`}</button>
//       <button className="bg-red-800 p-2 rounded-lg">Delete</button>
//     </div>
//   );
// };

export default TodoList;
