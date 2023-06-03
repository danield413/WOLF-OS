import React from 'react'
import styled from 'styled-components'
import { useAppState } from '../../hooks/useAppState'
import {FaUserCog} from 'react-icons/fa'

const Container = styled.div`

//gradient color to the h1 text

    & h1 {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        justify-content: center;
        background-color: red;
        background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
        padding: 10px;
        border-radius: 5px;
    }

    & button {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: 3px solid transparent;
        background-color: #757575;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            outline: 3px solid white;
        }
    }

    & button:last-child {
        margin-bottom: 120px;
    }
`

const Settings = () => {

    const {state} = useAppState()

  return (
    <Container>
        <h1>{state.user.nombre}</h1>
        <button>Cambiar contraseña</button>
        <button>Cambiar nombre</button>
    </Container>
  )
}

export default Settings