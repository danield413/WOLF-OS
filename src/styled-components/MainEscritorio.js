import styled from 'styled-components'

// ESTILOS DEL MAIN
export const MainEscritorio = styled.main`
  background-image: url("../images/OSX-12-Dark-compressed.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ESTILOS DE LA BARRA SUPERIOR */
  .barrasuperior {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(163, 163, 163, 0.404);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
  }

  .barrasuperior > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .barrasuperior span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    margin: 0;
    border: none;
    font-weight: bold;
  }

  .barrasuperior button {
    color: white;
    font-weight: bold;
    display: inline-block;
    height: 100%;
    padding: 0 10px;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: 0.3s ease-in-out;
  }

  .barrasuperior button img {
    height: 100%;
    width: auto;
  }

  .barrasuperior button:hover {
    background-color: rgb(0, 0, 0);
    color: #ffffff;
    border-radius: 4px;
  }

  /* ESTILOS DE LA BARRA DE TAREAS */
  .barratareas {
    position: absolute;
    bottom: 5px;
    height: 50px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(72, 73, 75, 0.301);
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .barratareas button {
    color: white;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    margin: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.082);
    border: 2px solid transparent;
    transition: 0.3s ease-in-out;
    margin: 0 10px;
  }

  .barratareas button svg {
    width: 20px;
    height: 20px;
  }

  .barratareas button:hover {
    transform: scale(1.1);
    border: 2px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;