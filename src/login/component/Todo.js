import React, { useReducer } from 'react'
import { Fragment } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case 'AddTodo':
            console.log("action-->",action)
            console.log("todoList-->",state.todoList)

            console.log("+++")
            return { todoList: state.todoList.concat(action.payload) }
        case 'RemoteTodo':
            console.log("todoList-->",state.todoList)
            console.log("RemoteTodo-->",)

            return { todoList: state.todoList.splice(0,1) }
        default:
            return state
    }
}
const initialState = {todoList: []};

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const list = state.todoList.map(ele => {
        console.log("ele=>",ele)
        return(<ol key={ele}>{ele}</ol>)
    })
    
    return <Fragment>
        <button onClick={()=>{dispatch({type:'AddTodo',payload:'thisData'+new Date})}}>Add</button>
        <button onClick={()=>{dispatch({type:'RemoteTodo'})}}>Delete</button>
        <ul>
            {list}
        </ul>
    </Fragment>
}

export default TodoList