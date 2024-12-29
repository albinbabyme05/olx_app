import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {FirebaseContext} from './store/FirebaseContext.jsx'
import firebase from './firebase/config.jsx'
import Context from './store/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
      <StrictMode>
        <App />
      </StrictMode>
    </Context>
  </FirebaseContext.Provider>
  
)
