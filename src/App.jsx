import './App.css'
import Landing from './pages/Landing'
import AddNew from './pages/AddNew'
import { Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Landing />} />
        <Route path='/add-todo' element={<AddNew />} />
        <Route path='/edit-todo/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
