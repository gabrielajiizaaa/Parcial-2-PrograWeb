import { useState } from 'react'
import ProductosBD from './ProductosBD.jsx'
import ProductosLocal from './ProductosLocal.jsx'
import './App.css'

function App() {
  const [vista, setVista] = useState('bd')

  return (
    <div className="contenedor">
      <nav className="menu">
        <a className={vista === 'bd' ? 'activo' : ''} onClick={() => setVista('bd')}>Base de Datos</a>
        <a className={vista === 'local' ? 'activo' : ''} onClick={() => setVista('local')}>Sin Base de Datos</a>
      </nav>

      {vista === 'bd' ? <ProductosBD /> : <ProductosLocal />}
    </div>
  )
}

export default App
