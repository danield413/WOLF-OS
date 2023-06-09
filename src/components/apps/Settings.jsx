import React from 'react'
import styled from 'styled-components'
import { useAppState } from '../../hooks/useAppState'
import {FaUserCog} from 'react-icons/fa'
import Swal from 'sweetalert2'
import axios from 'axios'

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

    const handleUpdate = () => {

        Swal.fire({
            title: 'Nueva contraseña',
            html: `
                <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
            `,
            confirmButtonText: 'Actualizar',
            focusConfirm: false,
            customClass: 'dark-mode',
            preConfirm: () => {
              const password = Swal.getPopup().querySelector('#password').value
              if (!password) {
                Swal.showValidationMessage(`Ingresa la nueva contraseña`)
              }
              return { password }
            }
          }).then( async (result) => {
            try {
                const response = await axios.put(`http://localhost:8080/api/auth/actualizar/${state.user.uid}`, { password: result.value.password
                })

                console.log(response)

                if(response.data) {
                    Swal.fire({
                        title: 'Contraseña actualizada',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
      
            } catch(error) {
              console.log(error)
              Swal.fire({
                title: 'Error',
                text: 'No se pudo actualizar la contraseña',
                icon: 'error',
                showConfirmButton: false,
              })
            }
          })

    }

  return (
    <Container>
        <h1>{state.user.nombre}</h1>

        <button onClick={handleUpdate}>Actualizar contraseña</button>
    </Container>
  )
}

export default Settings