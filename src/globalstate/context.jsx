import React, { createContext, useReducer } from 'react';
import {BsFillFileTextFill, BsFillFolderFill, BsFillTerminalFill, BsImageFill} from 'react-icons/bs'
import {MdAudiotrack, MdGraphicEq} from 'react-icons/md'
import  {AiFillCalculator} from 'react-icons/ai'

const initialState = {
  user: null,
  currentApp: null,
  apps: [
    {
      id: 1,
      name: 'Archivos',
      component: <BsFillFolderFill/>
    },
    {
      id: 2,
      name: 'Terminal',
      component:  <BsFillTerminalFill/>
    },
    {
      id: 3,
      name: 'Recursos',
      component: <MdGraphicEq/>
    },
    {
      id: 5,
      name: 'Visor imágenes',
      component: <BsImageFill/>
    },
    {
      id: 6,
      name: 'Calculadora',
      component: <AiFillCalculator/>
    },
    {
      id: 7,
      name: 'Audio',
      component: <MdAudiotrack/>
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null
      };
    case 'SET_CURRENT_APP':
      return {
        ...state,
        currentApp: action.payload
      };
    default:
      return state;
  }
};

export const WolfOSContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const logUser = user => {
    dispatch({ type: 'LOGIN_USER', payload: user });
  };

  const logOutUser = _ => {
    dispatch({ type: 'LOGOUT_USER', payload: null });
  };

  const setCurrentApp = app => {
    dispatch({ type: 'SET_CURRENT_APP', payload: app });
  };

  return (
    <WolfOSContext.Provider value={{ state: state, logUser, logOutUser, setCurrentApp }}>
      {children}
    </WolfOSContext.Provider>
  );
};