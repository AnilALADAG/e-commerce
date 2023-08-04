import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './pages/Profile';
import Basket from './pages/Basket';
import Error404 from './pages/Error';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className={`body`}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="*" component={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
