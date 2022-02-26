import React from "react"
import Header from "./pages/header/Header"
import Footer from "./pages/footer/Footer"
import Routes from "./Routes"
import PokebagContextProvider from "./components/context/PokebagContextProvider"

export default function App() {

    return (
        <>
            <PokebagContextProvider>
                <Header />
                <Routes />
                <Footer />
            </PokebagContextProvider>
        </>
    )

}