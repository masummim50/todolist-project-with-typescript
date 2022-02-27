import React, { KeyboardEvent, KeyboardEventHandler, useRef, useState, useReducer } from "react";
import { initialstate, reducer } from "./Reducers";
import SingleTodo from "./SingleTodo";
import TodoList from './TodoList';


export interface ItodoObject {
    id:number,
    text: string|undefined,
    completed: boolean
}
// interface Iaction {
//   type: string,
//   payload: ItodoObject
// }

const TodoInputBox = () => {
  // const reducer =(state:ItodoObject[], action:Iaction)=> {
  //   switch(action.type){
  //     case 'submit':
  //       return [...state, action.payload]
  //     default:
  //       return state;
  //   }
    
  // }

  const [state, dispatch ] = useReducer(reducer, []);
    // const [todos, setTodos]= useState<ItodoObject[]>([]);
    const todoText = useRef<HTMLInputElement>(null);
    const handleSubmit = ()=> {
      dispatch({type:'submit', payload:{id:new Date().getTime(),text:todoText.current?.value,completed:false}});
      clear();
      todoText.current?.focus();
    }
    const clear = ()=> {
      if(todoText.current){
        todoText.current.value = '';
      }
    }
    // const handleSubmit = (): void=> {
    //     if(todoText.current?.value){
    //         setTodos([...todos, {id: todos.length, text:todoText.current.value, completed:false}])
    //     }else{
    //       alert('write something')
    //     }
    //     clear();
    //     todoText.current?.focus()
        

    // };
    const checkKeypress = (event:KeyboardEvent<HTMLElement>): void=> {
      if(event.key === 'Enter'){
        handleSubmit()
      }
    }

  return (
    <div>
      <input
        onKeyPress={checkKeypress}
        id="inputbox"
        type="text"
        ref = {todoText}
        className="w-full p-4 focus:outline-none text-black rounded-sm"
        placeholder="Type here"
      />
      <button onClick={handleSubmit} className="bg-white text-purple-900 font-bold px-10 py-3 rounded-sm mt-3 hover:bg-purple-900 hover:text-white transition-all duration-200">
        Add to list
      </button>
      {
        state.map((todo:ItodoObject)=> {
          return <TodoList key={todo.id} todo={todo} dispatch={dispatch} todotext={todoText}/>
        })
      }
      {/* {
          todos.map((todo:ItodoObject)=> {
              return <TodoList key={todos.indexOf(todo)} todo={todo} setTodo={setTodos} todos={todos}/>
          })
      } */}
    </div>
  );
};

export default TodoInputBox;
