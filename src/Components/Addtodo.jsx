/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
//add karna hai mujhe store me to usko yaha se dispatch karna hoga store me
import {useDispatch} from 'react-redux';
import {addtodo} from '../Features/Todo/Todoslice'
function Addtodo() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        //dispatch reducer ko use krte huye store ke andar changes karta hai
        //yaha se add todo ke andar dispatch kar diye or wha action chaiye usko so hamara input hi to action.payload ke andar jayega to input vej diye
        dispatch(addtodo(input))
        setInput('');       //ye bas isliye kar raha taki ek bar value dispatch ho jaye then uske baad wapas se empty dikhe input field
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export  {Addtodo}
