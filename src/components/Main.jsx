import React, { useEffect, useState } from "react";
import { MainEscritorio } from '../styled-components/MainEscritorio'
import Menu from "./Menu";
import FormBuscar from "./FormBuscar";
import { useSnackbar } from "notistack";
import Window from './Window'
import { useAppState } from "../hooks/useAppState"
import Resources from "./apps/Resources"
import Files from "./apps/Files"
import Terminal from "./apps/Terminal"
import Images from "./apps/Images"
import TextEditor from "./apps/TextEditor"
import CalculatorW from "./apps/CalculatorW"
import Settings from "./apps/Settings"

// componente Main 
// setAuthenticated es una función que cambia el estado de la variable authenticated del componente App
const Main = () => {

  // estados para verificar si el usuario esta logeado, el buscador está abierto y para almacenar la hora
  const { logOutUser, state, setCurrentApp } = useAppState()
  const [openMenu, setOpenMenu] = useState(false)
  const [openBuscar, setOpenBuscar] = useState(false)
  const [hora, setHora] = useState(new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'))
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // useEffect que se ejecuta cada 10 segundos para actualizar la hora en el componente
  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'))
    }, 10000);
    return () => clearInterval(interval);
  }, [hora])

  // funcion que se ejecuta cuando se quiere cerrar sesión
  const handleLogout = () => {
    logOutUser()
    enqueueSnackbar('Sesión cerrada', { variant: 'success' });
    setTimeout(() => {
      closeSnackbar();
    }, 4000);
  }

  // funcion que cambia el estado de este componente para mostrar el menú del s.o
  const handleMenu = () => {
    setOpenMenu(true)
  }

  // funcion que me abre y cierra el formulario de buscar
  const handleBuscar = () => {
    setOpenBuscar(!openBuscar)
  }

  const handleSettings = () => {
    setCurrentApp('Configuración')
  }

  // renderizado del componente
  return (
    <>

    <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}/>

    <MainEscritorio className="animate__animated animate__fadeIn">
      <div className="barrasuperior">
        <div className="botones">
          <button onClick={handleMenu}>
            <img src="./images/logo.jpg" width="20" height="20" />
          </button>
          <button onClick={handleBuscar}>Buscar</button>
          <FormBuscar isOpened={openBuscar} setOpenBuscar={setOpenBuscar}/>
        </div>
        <div className="botones">
          <span>{hora}</span>
          <span>{state.user.name}</span>
          <button onClick={handleSettings}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h1"></path>
              <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            </svg>
          </button>
          <button id="cerrarsesion" onClick={handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* VENTANAS */}

      {
        state.currentApp === 'Recursos' && (
          <Window title="Administrador de recursos de hardware">
            <Resources />
         </Window>
        )
      }

      {
         state.currentApp === 'Archivos' && (
          <Window title="Administrador de dispositivos">
            <Files />
          </Window>
        )
      }

      {
        state.currentApp === 'Terminal' && (
          
          <Window title="Terminal">
            <Terminal />
          </Window>
        
        )
      }

      {
        state.currentApp === 'Texto' && (
          <Window title="Editor de texto">
            <TextEditor />
          </Window>
        )
      }

      {
        state.currentApp === 'Visor imágenes' && (
          <Window title="Visor imágenes">
            <Images/>
          </Window>
        )
      }

      {
        state.currentApp === 'Calculadora' && (
          <Window title="Calculadora">
            <CalculatorW />
          </Window>
        )
      }

      {
        state.currentApp === 'Configuración' && (
          <Window title="Configuración">
            <Settings />
          </Window>
        )
      }
      
      <div className="barratareas">
        {
          state.apps.map((app, index) => {
            return (
              <button key={index} onClick={() => {
                setCurrentApp(app.name)
              }}>
                {app.component}
              </button>
            )
          })
        }
      </div>
    </MainEscritorio>
    
    </>
  );
};

export default Main;
