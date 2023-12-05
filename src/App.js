import { useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Nopage from "./pages/404"
import ProductPage from './pages/productPage';
import Checkout from './pages/checkout';
function App() {
  const [storeProducts, setStoreProducts] = useState()
  const [product, setProduct] = useState()
  const [cart, setCart] = useState()
  useEffect(() => {
    storeApi()
  },[])
  const storeApi = async ()=>{
    await fetch('https://fakestoreapi.com/products').then(res=>res.json())
    .then(json=>setStoreProducts(json));
  }
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' index element={
          <Shop storeProducts={storeProducts} setProduct={setProduct}/>
          }/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path='/product-page' element={
          <ProductPage product={product} setCart={setCart} cart={cart}/>
          }/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
