import { useState } from "react"
import LogIn from "./components/LogIn"
import Main from "./components/Main"
import { useAppState } from "./hooks/useAppState"
import './App.css'
import 'animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// RAIZ DE WOLF OS
//Si el usuario no está autenticado carga el Login y si lo está carga el Main

function App() {

  const { state } = useAppState();

  return (
    <>
    {
      state.user ? <Main /> : <LogIn />
    }
    </>
  )
}

export default App
