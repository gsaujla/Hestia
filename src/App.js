import "./App.css"
import Signin from "./pages/signin";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Sublets from "./pages/list";
import Contact from "./pages/contact";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Listings from "./pages/listings"
import Profile from "./pages/profile"
import Privacy from "./pages/privacyPolicy";
import YourListing from "./pages/yourListings";
import Settings from "./pages/settings";
import TNC from "./pages/TermsNConditions";
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
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/signin' element = {<Signin/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/settings' element = {<Settings/>} />
        <Route path='/about' element = {<About/>} />
        <Route path="/list" element = {<Sublets/>} />
        <Route path="/listings" element = {<Listings/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/privacy" element = {<Privacy/>} />
        <Route path="/TermsNconditions" element = {<TNC/>} />
        <Route path="/yourListing" element = {<YourListing/>} />
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