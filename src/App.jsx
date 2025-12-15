import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Catalogue from './pages/Catalogue'
import LongweiProduct from './pages/LongweiProduct'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/catalogue"
          element={<Catalogue />}
        />
        <Route
          path="/longwei"
          element={<LongweiProduct />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
