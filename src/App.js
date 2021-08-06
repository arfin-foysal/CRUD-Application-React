import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContextProvider from './Components/Context/UserContext';
import Delete from './Components/Delete/Delete';
import Home from './Components/Home/Home';
import Read from './Components/Read/Read';
import { CreateItem } from './Components/CreateItem/CreateItem';
import './App.css'
import { Edit } from './Components/Edit/Edit';

function App() {
  return (
    <ContextProvider >
      
  <div className='App'>
  <Router>
    <Switch>
    <Route path="/createItem" exact component={CreateItem}/>
    <Route path="/edit/:id" exact component={Edit}/>
    <Route path="/delete/:id" exact component={Delete}/>
    <Route path="/read/:id" exact component={Read}/>
    <Route path="/" exact component={Home}/>
    </Switch>
  </Router>
  </div>
    </ContextProvider>
  );
}

export default App;
