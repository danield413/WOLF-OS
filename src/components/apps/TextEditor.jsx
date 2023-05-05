import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

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

  const { quill, quillRef } = useQuill({theme: 'snow'});
  console.log(quill)

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log(quill.getText()); // Get text only
      });
    }
  }, [quill]);

  return (
    <>
      <Options>
        <button>Guardar</button>
        <button>Guardar como</button>
        <button>Imprimir</button>
      </Options>
      <Container>
        {/* <textarea></textarea> */}
        <div style={{ width: '100%', height: 300 }}>
          <div ref={quillRef} />
        </div>
      </Container>
    </>
  )
}

export default TextEditor