import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Collection from "./components/collection";

const App = () => {
  return (
    <div>
      <main className="container mt-4 ">

      <Header/>
      <Home/>
      <About/>
      <Collection/>
      <Contact/>
      <Footer/>
        

      </main>
    </div>
  );
};

export default App;
