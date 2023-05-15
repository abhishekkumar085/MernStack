import React from 'react';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/productScreen';

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
      <Link to="/">ClothsSells</Link>
      </header>
          <main>
        <Routes>
        <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
         </main>
         </div>
    
    </BrowserRouter>
  );
}

export default App;
