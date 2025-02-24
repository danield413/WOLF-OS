import { useSnackbar } from "notistack"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { useAppState } from "../hooks/useAppState"
import axios from "axios"
import { Main } from "../styled-components/Login"


// estilos del componente LogIn


const LogIn = () => {

  const { logUser } = useAppState()

  //estados para verificar si el usuario esta logeado y para almacenar la hora y mostrarla en el componente alert
  const [login, setLogin] = useState(false)
  const [changeUser, setChangeUser] = useState(false)
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const formRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'))
    },)
    return () => clearInterval(interval)
  }, [hora])

  // funcion que se ejecuta cuando se envia el formulario del login y se verifica la contraseña, si esta es correcta se cambia el estado de authenticated a true
  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target.elements.username.value
    const pass = e.target.elements.password.value

    try {
      const resp = await axios.post('http://localhost:8080/api/auth/login', { nombre:name, password: pass })
      console.log(resp.data)

      if(resp.data.msg === 'ok') {
        e.target.reset()
        enqueueSnackbar('Usuario logueado correctamente', { variant: 'success' })
        logUser(resp.data.usuario)
      }       


   } catch (error) {
      if(error) {
        e.target.reset()
        enqueueSnackbar('Nombre o Contraseña incorrecta', { variant: 'warning' })
      }
   }
    
  }

  const handleSubmitCreate = async (e) => {
    e.preventDefault()

    const { username, password, rol} = e.target.elements
    const name = username.value
    const pass = password.value
    const rolUsuario = rol.value


   try {
      const resp = await axios.post('http://localhost:8080/api/usuarios/', { nombre:name, password: pass, rol: rolUsuario })

      if(resp.data) {
        e.target.reset()
        enqueueSnackbar('Usuario creado correctamente', { variant: 'success' })
      }

   } catch (error) {
      if(error) {
        console.log(e)
        e.target.reset()
        enqueueSnackbar('Ha ocurrido un error', { variant: 'danger' })
      }
   }

  }

  // funcion que cambia el estado de este componente para mostrar el formulario de login
  const handleLogin = () => {
    setLogin(!login)
  }

  return (
    <Main className="animate__animated animate__fadeIn">
      <div className="logo">
        <img src="../../images/logo.jpg" alt="logo" />
        <p>
          <span>WOLF</span> OS
        </p>
      </div>

      <div className="container">

        {
          !login && !changeUser && (

            <>
              <h1></h1>
              <h2>Bienvenido</h2>
              <button className="btn" onClick={handleLogin}>Iniciar sesión</button>
            </>

          )
        }

        {
          login && !changeUser && (
            <>
              <form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                <img src="./images/logo.jpg" alt="usuario" />
                <input type="text" name="username" id="username" placeholder="Usuario" />
                <input type="password" name="password" id="password" placeholder="Contraseña"/>
                <input type="submit" value="Iniciar Sesión" />
              </form>
              <button className="btn-link" onClick={() => setChangeUser(!changeUser)}>Crear nuevo usuario</button>
            </>
          )
        }

        {
          changeUser && (
            <>
              <form onSubmit={handleSubmitCreate} autoComplete="off" className="animate__animated animate__fadeIn">
                <input type="text" name="username" id="username" placeholder="Usuario" />
                <input type="password" name="password" id="password" placeholder="Contraseña" />
                <select name="rol" id="rol">
                  <option value="ADMIN_ROLE">Administrador</option>
                  <option value="USER_ROLE">Usuario</option>
                </select>
                <input type="submit" value="Crear usuario" />
              </form>
              <button className="btn-link" onClick={() => setChangeUser(!changeUser)}>Volver</button>
            </>
          )
        }

      </div>
      <aside className="barralateral">

      </aside>

      <h1 className="hora">{hora}</h1>
    </Main>
  )
}

export default LogIn
