import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import { Dashboard } from './modules/dashboard'
import { ClientList, ClientAdd } from './modules/client'
import { Profile } from './modules/user'


//Components


import './App.css'
import ClientView from './modules/client/ClientView'

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<ClientList />} />
          <Route path="/client/add" element={<ClientAdd />} />
          <Route path="/client/view/:id" element={<ClientView />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
