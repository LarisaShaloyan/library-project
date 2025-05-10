
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorsList from "./components/authorsList";
import AuthorPage from "./components/authorPage";
import WorkPage from "./components/WorkPage";
import Navbar from "./components/Navigation/Navbar";

import About from "./components/Navigation/About";
import Contact from "./components/Navigation/Contact";

import MainPage from "./components/Navigation/MainPage";
import Footer from "./components/Navigation/Footer";




function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white ">

<Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/authors" element={<AuthorsList />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/authors/:id" element={<AuthorPage />} />
                    <Route path="/authors/:id/works/:works" element={<WorkPage />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
