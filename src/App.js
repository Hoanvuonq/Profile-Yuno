import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Scss/main.scss';

import Home from './Components/Pages/Home';
import Setting from './Components/Layout/Setting';
import Menu from './Components/Layout/Menu';
import Header from './Components/Layout/Header';
import Clock from './Components/Layout/Clock';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Setting" element={<Setting />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Clock" element={<Clock />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
