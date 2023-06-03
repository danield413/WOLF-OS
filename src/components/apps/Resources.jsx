import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  color: #00ffd5;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .container {
    .procesos {
      height: 350px;
      overflow-y: scroll;
    }
    .proceso {
      margin-bottom: 1rem;
      margin-right: 10px;
      padding: 1rem;
      background-color: transparent;
      border-radius: 10px;
      border: 3px solid #00ffd5;
      color: #b8b8b8;
      p:nth-child(1) {
        font-weight: bold;
        color: white;
      }
    }
  }
`

const Resources = () => {

  const [info, setInfo] = useState(null)
  const [procesos, setProcesos] = useState(null)

  useEffect(() => {
    const getInfo = async () => {
      const resp = await axios.get('http://localhost:8080/api/usuarios/info')
      setInfo(resp.data)
    }
    getInfo()

    const getProcesos = async () => {
      const resp = await axios.get('http://localhost:8080/api/usuarios/procesos')
      setProcesos(resp.data)
    }
    getProcesos()

  }, [])

  return (
    <>

          <Grid>
            <div className="container">

            {
              info && (
                <>
                 <Titulo>Procesador</Titulo>
                <p>Arquitectura del procesador: {info.arquitecturaProcesador}</p>
                <p>Modelo de procesador: {info.tipoProcesador}</p>
                <p>Número de núcleos: {info.nucleosProcesador} núcleos</p>

                <Titulo>Memoria</Titulo>
                <p>Memoria: {info.memoriaTotal}</p>
                <p>Memoria libre: {info.memoriaLibre}</p>
                </>
              )
            }
            </div>

            <div className="container">
              <Titulo>Procesos</Titulo>
                <div className="procesos">
                {
                  procesos && procesos.map(proceso => (
                    <div className="proceso" key={proceso.pid}>
                      <p>Nombre: {proceso.nombre}</p>
                      <p>PID: {proceso.pid}</p>
                      <p>Uso de memoria: {proceso.usoMemoria}</p>
                    </div>
                    ))
                }
              </div>
            </div>

          </Grid>
    </>
  )
}

export default Resources