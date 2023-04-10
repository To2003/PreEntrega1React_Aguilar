import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu } from './componentes/NavBar/navbar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <ItemListContainer greeting={"Bienvenidos este es el item list container"} />
    </>

  )
}

export default App
