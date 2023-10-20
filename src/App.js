import Landing from './screens/landing'
import Register from './screens/signUp'
import Main from './screens/main'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
