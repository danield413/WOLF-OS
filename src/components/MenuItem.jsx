import React from 'react'
import { useAppState } from '../hooks/useAppState'

const MenuItem = ({children, name, setOpenMenu}) => {

  const { setCurrentApp } = useAppState()

  const handleCurrent = () => {
    setCurrentApp(name)
    setOpenMenu(false)
  }

  return (
    <div className="application" onClick={handleCurrent}>
        {children}
        <p>{name}</p>
    </div>
  )
}

export default MenuItem