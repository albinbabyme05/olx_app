import { useState } from 'react'
import Home from './Pages/Home';
import './App.css'

import {BrowserRouter as Router, Route} from  'react-router-dom'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Router>
      
    </div>
  )
}

export default App
