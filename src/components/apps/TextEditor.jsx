import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import Swal from 'sweetalert2'
import axios from 'axios'
import { useAppState } from '../../hooks/useAppState'
import jsPDF from 'jspdf';


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

const TextEditor = ({item = null}) => {
  console.log(item)
  const [mounted, setMounted] = useState(false);
  const { state, setCurrentApp } = useAppState();

  useEffect(() => {
    if(!mounted) {
      console.log('first render')
      const quill = new Quill('#editor', {
        theme: 'snow'
      });
      setMounted(true)
    }
    document.querySelector('.ql-editor').innerHTML = item.informacion
  }, [ ])

  const generatePDF = () => {
    const doc = new jsPDF();
    const html = document.querySelector('.ql-editor').innerHTML
    const text = html.replace('<p>', '').replace('</p>', '')
    
    doc.text(text, 10, 10); // Añade el texto al documento PDF
  
    doc.save('ejemplo.pdf'); // Descarga el archivo PDF con el nombre 'ejemplo.pdf'
  };
  

  const handleImpresion = () => {
    Swal.fire({
      title: 'Imprimiendo',
      html: 'Estamos imprimiendo tu archivo, espera un momento',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        setTimeout(() => {

          generatePDF();
          Swal.fire({
            title: 'Archivo impreso',
            text: 'El archivo se ha impreso correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })

        }, 1000 )
      }
    })
  }

  const handleSave = () => {

    const html = document.querySelector('.ql-editor').innerHTML
    const text = html.replace('<p>', '').replace('</p>', '')
    console.log(text)

    
    Swal.fire({
      title: 'Guardando',
      html: 'Estamos guardando tu archivo, espera un momento',
      timerProgressBar: true,
      didOpen: () => {

        Swal.showLoading()
        setTimeout(() => {
          axios.put(`http://localhost:8080/api/usuarios/files/${item.uid}`, {
            informacion: text
          })
          .then(function (response) {
            console.log(response)
            Swal.fire({
              title: 'Archivo guardado',
              text: 'El archivo se ha guardado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })

            setCurrentApp(null)

          })
          .catch(function (error) {
            console.log(error);
          });
        }, 1000 )

      }

    })
  }


  return (
    <>
      <Options>
        <button onClick={handleSave}>Guardar</button>
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