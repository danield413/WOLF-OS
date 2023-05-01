import React, { useId } from 'react'
import styled from 'styled-components'
import { useAppState } from '../hooks/useAppState'
import MenuItem from './MenuItem'

// estilos del componente Menu
const MenuContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${props => props.openMenu ? '0' : '-100%'};
    background-color: rgba(109, 109, 109, 0.253);
    z-index: 100;
    color: white;
    padding: 40px;
	backdrop-filter: blur(20px);

    button {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #00000028;
        font-size: 1.5em;
        border-radius: 50%;
        border: 2px solid transparent;
        padding: 5px;
        cursor: pointer;

        svg {
            height: 40px;
            width: 40px;
            color: white;
        }
    }

	button:hover {
		border: 2px solid white;
	}

    .applications {
		margin: 20px 0;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
		grid-gap: 40px;
    }

	.application {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30px 0;
		padding: 20px;
		border-radius: 10px;

		svg {
			height: 50px;
			width: 50px;
			color: white;
		}

		p {
			margin: 0;
			margin-top: 20px;
			padding: 0;
			font-size: 1.2em;
		}
	}

	.application:hover {
		transform: scale(1.1);
		cursor: pointer;
		background-color: #f0f8ff2b;
	}
`

// componente Menu
// recibe como props la función setOpenMenu y la variable openMenu
// setOpenMenu es la función que cambia el estado de openMenu
// openMenu es el estado que controla si el menú está abierto o cerrado
const Menu = ({ setOpenMenu, openMenu }) => {

	const { state } = useAppState()

	// función que se ejecuta cuando se cierra el menú
	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	// renderizado del componente
	return (
		<MenuContainer openMenu={openMenu}>
			<button onClick={handleCloseMenu}>

				<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M18 6l-12 12"></path>
					<path d="M6 6l12 12"></path>
				</svg>

			</button>

			<h1>Aplicaciones</h1>

			<div className="applications">
				{state.apps.map(app => (
					<MenuItem name={app.name} key={app.id} setOpenMenu={setOpenMenu}>
						{app.component}
					</MenuItem>
				))}
			</div>

		</MenuContainer>
	)
}

export default Menu