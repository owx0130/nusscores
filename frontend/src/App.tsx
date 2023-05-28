import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CreateTourney from './pages/CreateTourney'
import EditTourney from './pages/EditTourney'
import AllTourney from './pages/AllTourneys'

export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/createtourney' element={<CreateTourney />} />
      <Route path='/edittourney' element={<EditTourney />} />
      <Route path='/alltourney' element={<AllTourney />} />
    </Routes>
  )
}
