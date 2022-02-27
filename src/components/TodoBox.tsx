import React from 'react'
import TodoInputBox from './TodoInputBox';

type Props = {}

function TodoBox() {
  return (
    <div className='bg-purple-600 text-white w-full sm:w-3/5 md:w-2/4 rounded-lg p-3'>
        <TodoInputBox/>
    </div>
  )
}

export default TodoBox