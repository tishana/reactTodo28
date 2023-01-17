import { getTodo, editTodo } from "../services/todos-api"
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function EditTodo(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheTodo = e => {
        e.preventDefault()
        const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
        editTodo(id, updatedTodo)
        nav(`/${id}`)
    }
  return (
    <div>
        <form onSubmit={editTheTodo}>
            Description:<input type='text' name='description' defaultValue={data.description}/>
            Completed:<input type='checkbox' name='complete' defaultChecked={data.complete} />
            <input type='submit' />
        </form>
    </div>
  )
}
