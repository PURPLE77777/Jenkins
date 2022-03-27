import React from "react";
import "../styles/app.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
