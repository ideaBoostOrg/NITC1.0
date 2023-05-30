import './assets/css/bootstrap.min.css'
// import './assets/css/line-icons.css'
import './assets/css/nivo-lightbox.css'
import './assets/css/animate.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

// import Navbar from './components/Navbar'
import Home from './pages/home'
import Register from './pages/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
