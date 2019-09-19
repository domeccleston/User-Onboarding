import React, { useState }  from 'react';
import './App.css';
import LoginForm from './components/Form.js'

function App() {

  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <LoginForm data={users} setter={setUsers}/>
    </div>
  );
}

export default App;
