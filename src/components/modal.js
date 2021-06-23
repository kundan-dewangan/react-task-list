import React from 'react';
import Button from './button';
export default function Modal({closeModal, mystyle, onSubmit,inputValue, onChange}) {
    return (
        <div className="modal modal-custom" style={mystyle}>
            <div className="modal-content">
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <h1 className="task-title">Create task</h1>
                <input type="text" placeholder="Enter the title" value={inputValue} onChange={(e)=>onChange(e)}></input>
                <Button onClick={onSubmit} buttonName="Create task" />
            </div>
        </div>
    )
}
