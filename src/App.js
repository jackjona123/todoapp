import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Todo from './Todo';
import {db} from './firebase';
import firebase from "firebase"


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to database and then we get some data using fetch, 
  useEffect(() => {
  //this code fires when app.js loaded
  db.collection('todos').onSnapshot(snapshot => {
    // console.log(snapshot.docs.map(doc => doc.data().todos))
    // console.log(snapshot.docs.map(doc => doc.data()))
    setTodos(snapshot.docs.map(doc => ({ id:doc.id, todo: doc.data().todo})))
  })}, [])

  // Function on button add ToDo
  const addTodo = (Event) => {
    // preventing default nature of form of refresh
    Event.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // to remove the entered words from input after clicking button
    setInput("");
  }



  return (
    <div className="App">
      {/* Wraping up in form to make sure enter key will submiting the form  */}
      <h1 className =  "App-header">ToDo List </h1>
      <h3>We'll help you be more productive <span role="img" aria-label="emoji">🕒</span></h3>
      <br />
      <form >
        <FormControl>
          <InputLabel>Write Your Task Here</InputLabel>
          <Input value={input} onChange={Event => setInput(Event.target.value)} />
          <br />
          <br />
          <br />
          <FormHelperText><center>Built By Jack Jona</center></FormHelperText>
        </FormControl>
        {/* using material ui */}
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          Add &nbsp;<span role="img" aria-label="emoji">✅ </span>
        </Button>
        {/* <button onClick={addTodo}>Add Todo </button> */}
      </form>
      <ul>
        {todos.map(todo => (
         <Todo todo={todo} />
        ))}
      </ul>
    </div>

  );
}

export default App;
