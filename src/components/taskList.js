import React from 'react';
export default function TaskList({ taskListItems }) {
    return (
        <>
            {taskListItems.length > 0 && <><h1 className="task-list-header">List of task</h1>
            {taskListItems && taskListItems.map((item, index) => {
                return <h3 className="task-list" key={index} style={{color: item.status ? 'green' : 'red'}}>{item.item}</h3>
            })}</>}
        </>
    )
}
