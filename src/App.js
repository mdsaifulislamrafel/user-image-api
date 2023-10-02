import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [users, setUser] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
  }, [])
  const addMember = (name) => {
    setTeam([...team, name])
  }
  return (
    <div>
      <ul>
        {
          team.map((m, idx) => <li key={idx}>{m}</li>)
        }
      </ul>
      {
        users.map((user, idx) => <User key={idx}  user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
