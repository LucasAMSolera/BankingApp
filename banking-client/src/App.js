import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { NavBarDisplay } from './components/navBarDisplay';
import { Home } from './components/home.js';
import { SignUp } from './components/signup.js';
import { Personal } from './components/personal.js';

function App() {
  return (
    <BrowserRouter>
      <NavBarDisplay />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/personal" element={<Personal />}/>
        <Route path="/settings" element={<h1>Settings</h1>}/>
        <Route path="/bankaccounts" element={<h1>Bank Accounts</h1>}/>
        <Route path="/transactions" element={<h1>Transactions</h1>}/>
        <Route path="/transaction/details" element={<h1>Transaction Details</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
