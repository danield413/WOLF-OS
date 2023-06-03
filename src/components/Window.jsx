import React from 'react'
import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'
import { useAppState } from '../hooks/useAppState'

const WindowStyle = styled.div`
    width: 70%;
    position: absolute;
    top: 50px;
    background-color: #252525;
    //padding snippet for each side

    border-radius: 10px;
    color: white;

    & header {
        padding: 10px 0;
        font-size: .9rem;
        font-weight: bold;
        width: 100%;
        text-align: center;
        position: relative;

        & button {
            position: absolute;
            top: 10px;
            left: 10px;
            border: none;
            background-color: #ff0062;
            color: white;
            display: grid;
            place-content: center;
            border-radius: 50%;
            cursor: pointer;
        }

        & button:hover {
            background-color:#bd0048;
        }
        
    }

    & main {
        padding: 10px;
    }
`

const Window = ({title, children}) => {

    const { setCurrentApp } = useAppState()

  return (
    <WindowStyle className="animate__animated animate__fadeIn">
        <header>
            {title}
            <button onClick={() => setCurrentApp(null)}><IoMdClose fill='#fff' size={20}/></button>
        </header>
        <main>
            {children}
        </main>
    </WindowStyle>
  )
}

export default Window