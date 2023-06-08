import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import Swal from 'sweetalert2'
import axios from 'axios'
import { useAppState } from '../../hooks/useAppState'

const Options = styled.div`
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

const Container = styled.div`
  height: 350px;
  overflow-y: auto;
  background-color: #fff;
  color: black;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    color: white;
    background-color: #494949;
    padding:10px;
    border-radius: 5px;
  }
`

const TextEditor = () => {
  const [mounted, setMounted] = useState(false);
  const { state } = useAppState();

  useEffect(() => {
    if(!mounted) {
      console.log('first render')
      const quill = new Quill('#editor', {
        theme: 'snow'
      });
      setMounted(true)
    }
  }, [ ])

  const handleImpresion = () => {
    Swal.fire({
      title: 'Imprimiendo',
      html: 'Estamos imprimiendo tu archivo, espera un momento',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        setTimeout(() => {

          Swal.fire({
            title: 'Archivo impreso',
            text: 'El archivo se ha impreso correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

        }, 3000)
      }
    })
  }

  const handleSave = () => {
    const html = document.querySelector('.ql-editor').innerHTML
    const text = html.replace('<p>', '').replace('</p>', '')
    console.log(text)

    if(text === "<br>"){
      Swal.fire({
        title: 'Error',
        text: 'No puedes guardar un archivo vacio',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return
    }

    Swal.fire({
      title: 'Guardar archivo de texto',
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
      <input type="text" id="extension" class="swal2-input" placeholder="Extension" value="docx" disabled>
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
      const informacion = text
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
      <Options>
        <button onClick={handleSave}>Guardar como</button>
        <button onClick={handleImpresion}>Imprimir</button>
      </Options>
      <Container>
        {/* <textarea></textarea> */}
        {/* <div style={{ width: '100%', height: 300 }}>
          <div ref={quillRef} />
        </div> */}
        <div id="editor"></div>
      </Container>
    </>
  )
}

export default TextEditor