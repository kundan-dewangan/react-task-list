import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Modal from './components/modal';
import TaskList from './components/taskList';

function App() {
  const [modalStatus, setModalStatus] = useState("none")
  const [taskListItems, setTaskListItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [timerStatus, setTimerStatus] = useState(false)
  const [intervalTime, setIntervalTime] = useState(0)
  const [timeOutTime, setTimeOutTime] = useState(0)

  const mystyle = {
    display: modalStatus
  };


  // open the modal window and set the interal and timeout
  const openModal = () => {
    setModalStatus("block");
    setTimerStatus(true)
    // repeat with the interval of 1 seconds
    setIntervalTime(setInterval(() => console.log('start'), 1000));
    // after 2 minats stop
    setTimeOutTime(setTimeout(() => {
      clearInterval(intervalTime);
      console.log('stop');
      setTimerStatus(false)
    }, 120000))
  }

  //close the modal window and clear the interval and timeout
  const closeModal = () => {
    setModalStatus("none");
    clearInterval(intervalTime);
    clearTimeout(timeOutTime);

  }

  //create task submit handler
  const onSubmit = () => {
    if (inputValue !== '') {
      setTaskListItems([...taskListItems, { item: inputValue, status: timerStatus }])
      setModalStatus("none");
      setInputValue('')
      clearInterval(intervalTime);
      clearTimeout(timeOutTime);
    }
  }

  //create task input handler
  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <>
      <div className="container">
        <Button onClick={openModal} buttonName="Create task" />
        <Modal closeModal={closeModal} mystyle={mystyle} inputValue={inputValue} onChange={inputOnChangeHandler} onSubmit={onSubmit} />
        <TaskList taskListItems={taskListItems} />
      </div>
    </>
  );
}

export default App;
