import React from 'react'
import styled from 'styled-components'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.terminal.value)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Ejecutar" />
        <textarea name="terminal" placeholder='Tu comando acá'></textarea>
      </form>
    </Container>
  )
}

export default Terminal