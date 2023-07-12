import './assets/css/bootstrap.min.css'
// import './assets/css/line-icons.css'
import './assets/css/nivo-lightbox.css'
import './assets/css/animate.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

// import Navbar from './components/Navbar'
import Home from './pages/home'
import Register from './pages/register'
import PaymentConfirm from './pages/confirm/ConfirmPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentConfirmed from './pages/confirm/components/PaymentConfirmed'
import PaymentFailed from './pages/confirm/components/PaymentFailed'



function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment-confirm" element={<PaymentConfirm />} />
          <Route path="/pa" element={<PaymentConfirmed />} />
          <Route path="/pr" element={<PaymentFailed />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
