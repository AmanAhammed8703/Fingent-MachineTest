import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductsContext } from './Context/ProductsContext/ProductsContext';
import LandingPage from './Pages/LandingPage';
import RemoveItemPage from './Pages/RemoveItemPage';
import ListItemPage from './Pages/ListItemPage';
import { useState } from 'react';
function App() {
  const [products, setProducts] = useState({})
  return (
    <div className="App">
      <ProductsContext.Provider value={{products,setProducts}}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
            <Route path='/removeitem' element={<RemoveItemPage />}/>
            <Route path='/listitem' element={<ListItemPage />}/>
            </Routes>
          </BrowserRouter>
      </ProductsContext.Provider>



        </div>
        );
}

        export default App;
