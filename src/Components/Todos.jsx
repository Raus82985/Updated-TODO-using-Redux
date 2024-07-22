/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
//yaha pe humko need hogi delete krne wale ki and update karne wale ki
import { removetodo, updatetodo } from '../Features/Todo/Todoslice'
function Todos() {

    //use selector ke andar direct state access krne ka option hota hai to waha se state ko access kar rake hai
    //name v state hi de rahe hai call back ke andar q ki confusion na ho 
    const todos = useSelector((state) => state.todos)   //todos ab ek arrray hai
    const dispatch = useDispatch();
    return (
        <>
            <div className='bg-black text-white font-serif text-lg p-2 m-4 rounded-lg underline'>Todos</div>
            <ul className="list-none bg-gray-500 p-5 rounded-xl max-w-2xl mx-auto">
                {/* jo todos array aaya uspe map laga rahe and then usko show kar denge */}
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg"
                        key={todo.id}
                    >
                        <div className='text-white text-lg'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removetodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export {Todos}
