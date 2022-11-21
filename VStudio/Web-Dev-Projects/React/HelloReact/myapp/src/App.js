import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import CopyRight from './Components/Copyright';
import notes from './Notes/notes';
import React from 'react';
// This function expects a note Object whose properties will be used to create
// a new note

function deleteItem(id){
  
}
function createCard(note) {
  return (
  <Card key={note.id} 
  id={note.id} 
  title={note.title} 
  content={note.content}
  deleteItem={note.delItem}
  />
  );
}

function App() {
  const [count, setCount] = React.useState(notes.length);

  function increase() {
    setCount(count + 1);
    addCard();
  }

  function addCard(title="Hello ",content="This is note ") {
    var newNote = {
      id: count,
      title: title + count,
      content: content + count
    }
    notes.push(newNote);
  }

  
  
  return (
    <div>
       <Navbar />
       {/* This maps a function to the entire array so that for each item, the createCard 
       method is called */}
        {notes.map(createCard)}
        <button onClick={increase}>Add Card </button>
       <CopyRight />
    </div>
  );
}

export default App;

