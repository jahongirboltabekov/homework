import './App.css'
import Banner from './components/banner/Banner'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Client from './components/our_clients/Client'
import Product from './components/products/Product'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Card/>
      <Product/>
      <Client/>
      <Footer/>
    </>
  )
}

export default App
