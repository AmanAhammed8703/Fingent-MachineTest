import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import RemoveItemPage from './Pages/RemoveItemPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
            <Route path='/removeitem' element={<RemoveItemPage />}/>
            </Routes>
          </BrowserRouter>



        </div>
        );
}

        export default App;
