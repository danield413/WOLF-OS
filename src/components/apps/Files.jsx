import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppState } from '../../hooks/useAppState'
import Swal from 'sweetalert2'

const Menu = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    background-color: #acacac;
    padding: 10px 5px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #000000;
    font-weight: bold;
    border: 3px solid transparent;
    cursor: pointer;
  }

  button:hover {
    background-color: #9c9c9c;
  }
`

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  height: 400px;
  overflow-y: auto;
`

const Item = styled.div`
  background-color: ${({ type }) => type ? '#2064bd' : '#858585'};
  padding: 5px;
  border-radius: 5px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Files = () => {

  const [files, setFiles] = useState([])
  const { state } = useAppState()

  useEffect(() => {

    async function getFiles() {
      if(state.user.rol === "ADMIN_ROLE") {
        const response = await axios.get('http://localhost:8080/api/usuarios/files/admin')
        console.log(response.data)
        setFiles(response.data.files)
      } else {
        const response = await axios.get('http://localhost:8080/api/usuarios/files', {
          body: {
            id: state.id
          }
        })
        console.log(response.data)
        setFiles(response.data.files)
      }
    }

    getFiles()

  }, [])

  const handleCreateFolder = () => {
    Swal.fire({
      title: 'Nueva carpeta',
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
      `,
      confirmButtonText: 'Crear nueva carpeta',
      focusConfirm: false,
      customClass: 'dark-mode',
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector('#nombre').value
        if (!nombre) {
          Swal.showValidationMessage(`Ingresa el nombre de tu carpeta`)
        }
        return { nombre }
      }
    }).then( async (result) => {
      const fechaActual = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
      const nombre = result.value.nombre
      const informacion = ""
      const peso = Math.random() * (100 - 1) + 1
      const esCarpeta = true
      const usuario = state.user.uid
    
      try {

        const response = await axios.post('http://localhost:8080/api/usuarios/files', { 
          nombre,
          informacion,
          peso,
          esCarpeta,
          fecha: fechaActual,
          usuario
        })

        console.log(response)

        if(response.status === 200) {
          Swal.fire({
            title: 'Carpeta creada',
            text: 'La carpeta se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

          //add file to state
          setFiles([...files, response.data.file])
          console.log(files)

        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrio un error al crear la carpeta',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }


      } catch(error) {
        console.log(error)
      }
    })
  }

  const handleCreateFile = () => {
    Swal.fire({
      title: 'Nueva carpeta',
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
      <input type="text" id="extension" class="swal2-input" placeholder="Extension">
      `,
      confirmButtonText: 'Crear nueva carpeta',
      focusConfirm: false,
      customClass: 'dark-mode',
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector('#nombre').value
        const extension = Swal.getPopup().querySelector('#extension').value
        if (!nombre || !extension) {
          Swal.showValidationMessage(`Ingresa el nombre y extensión de tu archivo`)
        }
        return { nombre, extension }
      }
    }).then( async (result) => {
      const fechaActual = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
      const nombre = result.value.nombre
      const extension = result.value.extension
      const informacion = ""
      const peso = Math.random() * (100 - 1) + 1
      const esCarpeta = false
      const usuario = state.user.uid
    
      try {

        const response = await axios.post('http://localhost:8080/api/usuarios/files', { 
          nombre,
          informacion,
          extension,
          peso,
          esCarpeta,
          fecha: fechaActual,
          usuario
        })

        console.log(response)

        if(response.status === 200) {
          Swal.fire({
            title: 'Archivo creado',
            text: 'La carpeta se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

          //add file to state
          setFiles([...files, response.data.file])
          console.log(files)

        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrio un error al crear la el archivo',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }


      } catch(error) {
        console.log(error)
      }
    })
  }


  return (
    <>
      <Menu>
        <button onClick={handleCreateFolder}>Nueva carpeta</button>
        <button onClick={handleCreateFile}>Nuevo archivo</button>
        </Menu>
      <Grid>
        {
          (files && files.length > 0) && files.map((item, index) => {
              console.log(item)
              return (
                <Item key={index} type={item.esCarpeta}>
                    {item.esCarpeta ?
                      <p>{item.nombre}</p>
                    :
                      <p>{item.nombre}.{item.extension}</p>
                    }
                </Item>
              )
          })
        }
      </Grid>
    </>
  )
}

export default Files