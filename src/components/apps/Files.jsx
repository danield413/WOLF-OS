import React from 'react'
import styled from 'styled-components'

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
  background-color: ${({ type }) => type === 'folder' ? '#2064bd' : '#858585'};
  padding: 5px;
  border-radius: 5px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const data = [
  {
    name: 'archivo1',
    type: 'file',
    size: '1.2mb',
    date: '12/12/2020'
  },
  {
    name: 'archivo2',
    type: 'file',
    size: '1.2mb',
    date: '12/12/2020'
  },
  {
    name: 'fotos',
    type: 'folder',
    size: '1.2mb',
    date: '12/12/2020'
  },
  {
    name: 'trabajos',
    type: 'folder',
    size: '1.2mb',
    date: '12/12/2020'
  }
]

const Files = () => {
  return (
    <>
      <Menu>
        <button>Nueva carpeta</button>
        <button>Nuevo archivo</button>
        </Menu>
      <Grid>
        {
          data.map((item, index) => {
              return (
                <Item key={index} type={item.type}>
                    <p>{item.name}</p>
                </Item>
              )
          })
        }
      </Grid>
    </>
  )
}

export default Files