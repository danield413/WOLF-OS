import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppState } from "../hooks/useAppState"
import axios from "axios"


// estilos del componente LogIn
const Main = styled.main`
  background-image: url("../../images/wallpaper3.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-rows: 80% 20%;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #ffffff;
    background-color: black;
    text-align: center;
    margin: 0;
    padding: 0;
    border-end-end-radius: 20px;
  }

  .logo p span {
    font-weight: bold;
  }

  .container {
    min-height: 300px;
    width: 400px;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.8px);
    -webkit-backdrop-filter: blur(8.8px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5em;
    font-weight: 600;
    color: #000000;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 3em;
    font-weight: bold;
    color: #000000;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .btn {
    margin: 0 auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #ffffff7b;
    color: #000000;
    font-size: 1.1em;
    cursor: pointer;
    font-weight: 600;
    margin-top: 20px;
    border: 3px solid transparent;
  }

  .btn:hover {
    background-color: #ffffffc8;
    border: 3px solid #535554;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form input {
    background: transparent;
    width: 60%;
    height: 40px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 5px;
    padding: 0 10px;
    font-size: 1.2em;
  }

  form input:focus {
    background-color: #ffffff81;
    border: 2px solid transparent;
  }

  form input::placeholder {
    color: #000000;
  }

  form input[type="submit"] {
    margin: 0 auto;
    padding: 2px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #ffffff7b;
    color: #000000;
    font-size: 1.1em;
    cursor: pointer;
    font-weight: 600;
    height: 40px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid transparent;
  }

  form input[type="submit"]:hover {
    background-color: #ffffffc8;
    border: 3px solid #535554;
  }

  form img {
    height: 100px;
    width: 100px;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  #username {
    margin-bottom: 20px;
  }

  .hora {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #ffffff;
  }

  a {
    text-align: center;
    display: block;
    color: #000000;
    text-decoration: none;
    margin: 0 auto;
  }

  a:hover {
    color: #000000;
    text-decoration: underline;
  }

  .barralateral {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  .btnbarra {
    cursor: pointer;
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
  }

  .btnbarra > svg {
    color: #ffffff;
  }

  .btnbarra:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LogIn = () => {

  const { logUser } = useAppState()

  //estados para verificar si el usuario esta logeado y para almacenar la hora y mostrarla en el componente alert
  const [login, setLogin] = useState(false);
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'));
    }, );
    return () => clearInterval(interval);  
  }, [hora])

  // funcion que se ejecuta cuando se envia el formulario del login y se verifica la contraseña, si esta es correcta se cambia el estado de authenticated a true
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = e.target.elements;
    const name = username.value
    const pass = password.value
    console.log(name, pass)
    const response = await axios.get('./data/data.json')
    const user = response.data.find(user => user.name.toLowerCase() === name && user.password === pass) || null
    
    if (user) {
      logUser(user)
      enqueueSnackbar(`Hola de nuevo, ${user.name}`, { variant: 'success' });
      setTimeout(() => {
        closeSnackbar();
      }, 4000);
    } else {
      enqueueSnackbar('Usuario o contraseña incorrectos', { variant: 'error' });
      setTimeout(() => {
        closeSnackbar();
      }, 4000);
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
          !login ? (

            <>
              <h1></h1>
              <h2>Bienvenido</h2>
              <button className="btn" onClick={handleLogin}>Iniciar sesión</button>
            </>

          ) : (
            <>
               <form onSubmit={handleSubmit} autoComplete="off" className="animate__animated animate__fadeIn">
                  <img src="./images/logo.jpg" alt="usuario" />
                  <input type="text" name="username" id="username" placeholder="Usuario" />
                  <input type="password" name="password" id="password" placeholder="Contraseña" />
                  <input type="submit" value="Iniciar Sesión" />
                </form>
            </>
          )
        }

      </div>
      <aside className="barralateral">
        <button className="btnbarra">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-settings-automation"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <path d="M10 9v6l5 -3z"></path>
          </svg>
        </button>
      </aside>

      <h1 className="hora">{hora}</h1>
    </Main>
  );
};

export default LogIn;
