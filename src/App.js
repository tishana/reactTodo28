import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import EditTodo from './components/EditTodo';
import Todo from './components/Todo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      ToDo List
      <Router>
        <Routes>
        <Route path='/' element={<Todos />}/>
        <Route path='/:id' element={<Todo />}/>
        <Route path='/:id/edit' element={<EditTodo />}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
