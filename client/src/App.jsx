import './App.css'
import { Routes, Route } from 'react-router'
import { useState } from 'react'
import { UserContext } from './contexts/UserContext'

import Footer from './components/footer/Footer'
import Header from './components/header-navigation/Header'
//import Modal from './components/header-navigation/Modal'
import TopNav from './components/header-navigation/TopNav'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import ProductCatalog from './components/product-catalog/ProductCatalog'
import ProductCreate from './components/product-create/ProductCreate'
import ProductDetails from './components/product-details/ProductDetails'
import ProductEdit from './components/product-edit/ProductEdit'


function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {

    setAuthData(resultData);
  }

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler }} >

      <>
        <TopNav />
        <Header />
        {/* <Modal /> */}

        <main id='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/:productId/details" element={<ProductDetails />} />
            <Route path="/products/:productId/edit" element={<ProductEdit />} />
            <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

      </>
    </UserContext.Provider>

  )
}

export default App
