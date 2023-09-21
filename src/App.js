import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
  }, [])
  return (
    <div className="App">
      {
        users.map(user => <User>{user}</User>)
      }
    </div>
  );
}

export default App;
