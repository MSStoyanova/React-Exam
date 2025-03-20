import './App.css'
import { Routes, Route } from 'react-router'
import Footer from './components/footer/Footer'
import Header from './components/header-navigation/Header'
import Modal from './components/header-navigation/Modal'
import TopNav from './components/header-navigation/TopNav'
import Home from './components/home/Home'

function App() {


  return (
    <>
      <TopNav />
      <Header />
      <Modal />

      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>



      <Footer />

    </>
  )
}

export default App
