import React from 'react'
import TodoCard from './TodoCard'

const ListeTodo = ({jobs}) => {
  return (
    <div>
      {jobs.map((job) => <TodoCard id={job.id} title={job.title} isDone={job.isDone} />)}
    </div>
  )
}

export default ListeTodo
