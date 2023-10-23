import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Pages'
import {Footer, Header} from './Components'
import './App.css'

function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
