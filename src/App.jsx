import './App.css'
import {Addtodo} from './Components/Addtodo'
import {Todos} from './Components/Todos'

function App() {


  return (
    <>
      <h1 className='font-serif font-bold underline text-gray-800'>TODO Using Redux Tool-Kit</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
