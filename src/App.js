import "./App.css"
import React from "react";
import MyHeader from "./components/MyHeader";
import MyShow from "./components/MyShow";
import MyMovies from "./components/MyMovies";
import MyFooter from "./components/MyFooter";

const App = () => {
    return (
        <div className="mx-3">
            <header><MyHeader /></header>
            <main>
              <MyShow/>
              <MyMovies/>
            </main>
            <footer><MyFooter /></footer>
        </div>
    );
};

export default App;
