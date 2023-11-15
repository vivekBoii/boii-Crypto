import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Coin from './Pages/Coin';
import Crypto from './Pages/Crypto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route exact path="/coin" element={<Coin/>}/>
          <Route path="/coin/:id" element={<Crypto/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App