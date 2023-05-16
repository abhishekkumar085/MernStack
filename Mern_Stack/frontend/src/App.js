import React from 'react';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/productScreen';

import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
   
    <div className="d-flex flex-column site-container">
      {/* <Link to="/">ClothsSells</Link> */}
      <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>ClothsSells</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
     
          <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
        
         </div>
    
    </BrowserRouter>
  );
}

export default App;
