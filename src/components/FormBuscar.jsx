import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useAppState } from '../hooks/useAppState'

// estilos del componente FormBuscar
const FormBuscarContainer = styled.form`
    width: 300px;
    height: 50px;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    top: 50px;
    left: ${({ isOpened }) => isOpened ? '50px' : '-350px'};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;


    input {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        outline: none;
        border: none;
        padding: 0 10px;
        background-color: #ffffff78;
        color: #000000;
        font-weight: bold;

        &::placeholder {
            color: #000000;
            font-weight: bold;
        }
    }
`

const ContainerResponse = styled.div`
    width: 250px;
    background-color: transparent;
    border-radius: 10px;
    top: 120px;
    left: 50px;
    position: absolute;    

    & .app {
        display: block;
        width: 100%;
        height: 40px;
        background-color: #ffffff78;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: bold;
    }

    & .app:hover {
        background-color: #ffffffac;
    }
`

// componente FormBuscar
// isOpened es una variable booleana que indica si el formulario está abierto o cerrado
const FormBuscar = ({ isOpened, setOpenBuscar }) => {

    const { state, setCurrentApp } = useAppState()
    const [search, setSearch] = useState('')
    const form = useRef(null)

    // función que se ejecuta cuando se envía el formulario
    const handleChange = (e) => {
        const value = e.target.value
        console.log(value) 
        setSearch(value)
    }

    const handleOpenApp = (appName) => {
        setCurrentApp(appName)
        setSearch('')
        form.current.reset()
        setOpenBuscar(false)
    }

    return (
    <>
        <FormBuscarContainer isOpened={isOpened} ref={form}>
            <input type="text" placeholder="Buscar" onChange={handleChange}/>
        </FormBuscarContainer>

        {
            search !== '' && (
                <ContainerResponse>
                    {
                        state.apps.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                            <div key={item.id} className='app' onClick={() => handleOpenApp(item.name)}>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </ContainerResponse>
            )
        }
    </>
    )
}

export default FormBuscar