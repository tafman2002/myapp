import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo' 
function App() {
  function deleteHandler() {
    console.log("clicked")
}
  return (
    <div className="App">
     <Todo text="Hello" deleteHandler={deleteHandler} />
     <Todo text="World" deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
