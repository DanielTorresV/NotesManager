import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={NoteList}/>
      <Route path="/create" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>
      <Route path="/edit/:id" component={CreateNote}/>
    </Router>
  );
}

export default App;
