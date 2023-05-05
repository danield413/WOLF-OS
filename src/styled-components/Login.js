import styled from "styled-components"

export const Main = styled.main`
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

  .btn-link {
    margin-top: 20px;
    text-align: center;
    display: block;
    color: #000000;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: .9em;
    cursor: pointer;
    padding: 5px;
  }

  .btn-link:hover {
    text-decoration: underline;
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