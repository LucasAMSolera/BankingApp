//import './App.css';
import './zephyr.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {useRef} from "react";

import { NavBarDisplay } from './components/navBarDisplay';
import { Home } from './components/home.js';
import { SignUp } from './components/signup.js';
import { Personal } from './components/personal.js';
import { Transaction } from './components/transactions';
import { Settings } from './components/settings';
import { BankAccounts } from './components/bankaccounts';

export const nameRef = useRef;

function App() {
  return (
    <BrowserRouter>
      <NavBarDisplay />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/personal" element={<Personal />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/bankaccounts" element={<BankAccounts/ >}/>
        <Route path="/transactions" element={<Transaction />}/>
        <Route path="/transaction/details" element={<h1>Transaction Details</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
