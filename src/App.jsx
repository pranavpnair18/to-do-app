import React, { useEffect, useState } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todoapp/Todo';
import { Container } from 'react-bootstrap';



const App = () => {
  
 
  return ( 
    
    <div className='App'>
    <Todo/>
    </div>
  )
}

export default App