import React from "react"
import Home from "./pages/home/Home"
import Header from "./pages/header/Header"
import Footer from "./pages/footer/Footer"
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