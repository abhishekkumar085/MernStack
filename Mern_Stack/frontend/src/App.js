import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/productScreen';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge.js';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Store } from './Store.js';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const {state} = useContext(Store)
  const {cart}=state;
  return (
    <BrowserRouter>
   
    <div className="d-flex flex-column site-container">
   
      <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>ClothsSells</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}

                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
     
          <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />

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
