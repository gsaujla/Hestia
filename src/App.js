import "./App.css"
import Signin from "./pages/signin";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Sublets from "./pages/list"
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Listings from "./pages/listings"
import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import React from 'react'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/signin' element = {<Signin/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/about' element = {<About/>} />
        <Route path="/list" element = {<Sublets/>} />
        <Route path="/listings" element = {<Listings/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

/*
  TARGETS:

  1) MAKE SIGN UP PAGE
  2) FINISH FRONT LANDING PAGE AS WELL ( WITHOUT FUNCTIONS )
  3) ABOUT US PAGE
  4) DASHBOARD

*/