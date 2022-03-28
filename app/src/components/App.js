import React from "react";
import "../styles/app.css";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Info from "./Info";
import Table from "./Table";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header></Header>
                <div className="main">
                    <Routes>
                        <Route path="/" element={Home()}></Route>
                        <Route path="/login" element={Login()}></Route>
                        <Route path="/profile" element={Profile()}></Route>
                        <Route path="/info" element={Info()}></Route>
                        <Route path="/table" element={Table()}></Route>
                        <Route path="*" element={Home()}></Route>
                    </Routes>
                </div>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
