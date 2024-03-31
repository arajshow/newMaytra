import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './components/common/Error';
import CreateBlog from './components/Blog/Create';
import BlogEdit from './components/Blog/Edit';
import BlogView from './components/Blog/Show';
import Login from './pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {


  return (
      <div className="w-screen min-h-screen bg-white flex flex-col font-inter ">
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>} />

          <Route path="/about" element = {
            <About />
          } />

          <Route path="/services" element = {
            <Services />
          } />

          <Route path="/gallery" element = {
            <Gallery />
          } />

          <Route path="/blog" element = {
            <Blog />
          } />

          <Route path="/contact" element = {
            <Contact />
          } />

          <Route path="/login" element = {
            <Login />
          } />

        <Route path='/blog/create' element={<PrivateRoute>
              <CreateBlog />
            </PrivateRoute>}  />
        <Route path='/blog/:id' element={<BlogView />}  />
        <Route path='/blog/edit/:id' element={<BlogEdit/>}  />

          <Route path="*" element={<Error />} />

        </Routes>
        
      </div>
  );
}

export default App;
