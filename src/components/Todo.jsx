import React from 'react'

const Todo = ({cantidad,todo, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                
                <br></br>
                <h3>  {todo}  - </h3>
                <h3>{cantidad}</h3>
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}

export default Todo