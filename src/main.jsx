import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {FirebaseContext} from './store/FirebaseContext.jsx'
import firebase from './firebase/config.jsx'

createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{firebase}}>
    <StrictMode>
    <App />
    </StrictMode>
  </FirebaseContext.Provider>
  
)
