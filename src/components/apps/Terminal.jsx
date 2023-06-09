import React from 'react'
import styled from 'styled-components'
import { useAppState } from '../../hooks/useAppState'

const Container = styled.div`
  color: #ffffff;
  height: 350px;

  textarea {
    resize: none;
    background-color: transparent;
    border: none;
    height: 310px;
    width: 100%;
    display: block;
    outline: none;
    color: #ffffff;

    &::placeholder {
      color: #ffffffa2;
    }
  }

  input[type="submit"] {
    background-color: #00f870;
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #000000;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #00e060;
  }
`

const Terminal = () => {

  const { logOutUser, state } = useAppState()

  const terminalRef = React.useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let txt = e.target.elements.terminal.value
    console.log(txt)
    //si el comando es clear, limpiamos la terminal
    if(txt === 'clear') {
      terminalRef.current.value = ''
    }
    if(txt === 'logout') {
      logOutUser()
    }
    if(txt === 'hora') {
      terminalRef.current.value = new Date().toLocaleTimeString().split(':').slice(0, 2).join(':') + '\n'
    }
    if(txt === 'fecha') {
      terminalRef.current.value = new Date().toLocaleDateString() + '\n'
    }
    if(txt === 'usuario') {
      terminalRef.current.value = 'Usuario: ' + state.user.nombre + '\n'
    }
    if(txt === 'rol') {
      terminalRef.current.value = 'Rol: ' + state.user.rol + '\n'
    }
    if(txt === 'help') {
      terminalRef.current.value = 'Comandos disponibles: \n' +
      'clear: Limpiar la terminal \n' +
      'logout: Cerrar sesión \n' +
      'hora: Muestra la hora actual \n' +
      'fecha: Muestra la fecha actual \n' +
      'usuario: Muestra el nombre del usuario \n' +
      'rol: Muestra el rol del usuario \n' +
      'help: Muestra esta lista de comandos \n'
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} >
        <input type="submit" value="Ejecutar"/>
        <textarea name="terminal" placeholder='Tu comando acá' ref={terminalRef}></textarea>
      </form>
    </Container>
  )
}

export default Terminal