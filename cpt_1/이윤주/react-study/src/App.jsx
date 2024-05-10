
import './App.css'
import ToggleButton from './components/ToggleButton'
// import CompInput from './components/CompInput'
import ToDoList from './components/ToDoList'

function App() {
  
  return (
    <>
      <h1>과제 1</h1>
      <ToggleButton />
      <h1>과제 2</h1>
        <form>
          <ToDoList/>
        </form>
      <h1>과제 3</h1>
    </>
  )
}

export default App
