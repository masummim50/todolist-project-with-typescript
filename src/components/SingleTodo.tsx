import React from 'react'
import { ItodoObject } from './Reducers';

type Props = {
    todo:ItodoObject,
    key:number
}

const SingleTodo = ({todo}: Props) => {
  return (
    <div>
        {todo.text}
    </div>
  )
}

export default SingleTodo