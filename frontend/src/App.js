import React from "react"
import Home from "./components/home/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Routes from "./Routes"

export default function App() {

    return (
        <>
            <Header />
            <h1>Pokedex</h1>
            <Routes />
            <Footer />
        </>
    )

}