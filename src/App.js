
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [todos, setToso] = useState([])
  useEffect(() => {
    // request api
    fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
      .then(data => {
        setToso(data)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <ol>
          {
            todos.map(todo => <li>{todo.title}</li>)
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
