import { useState } from 'react'
import './App.css'

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Laptop', categoria: 'Tecnología', precio: 5500, stock: 10 },
    { id: 2, nombre: 'Mouse', categoria: 'Tecnología', precio: 80, stock: 50 },
    { id: 3, nombre: 'Silla', categoria: 'Muebles', precio: 650, stock: 15 },
  ])
  const [form, setForm] = useState({ nombre: '', categoria: '', precio: '', stock: '' })
  const [busqueda, setBusqueda] = useState('')

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const registrar = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.categoria || !form.precio || !form.stock) return
    setProductos([
      ...productos,
      { id: Date.now(), nombre: form.nombre, categoria: form.categoria, precio: Number(form.precio), stock: Number(form.stock) },
    ])
    setForm({ nombre: '', categoria: '', precio: '', stock: '' })
  }

  const eliminar = (id) => setProductos(productos.filter((p) => p.id !== id))

  const filtrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="contenedor">
      <h1>Registro de Productos</h1>

      <form onSubmit={registrar} className="formulario">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={cambiar} />
        <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={cambiar} />
        <input name="precio" type="number" min="0" step="0.01" placeholder="Precio" value={form.precio} onChange={cambiar} />
        <input name="stock" type="number" min="0" placeholder="Stock" value={form.stock} onChange={cambiar} />
        <button type="submit">Registrar</button>
      </form>

      <input
        className="buscador"
        placeholder="Buscar por nombre o categoría..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>Q {p.precio.toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => eliminar(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtrados.length === 0 && <p>No se encontraron productos.</p>}
    </div>
  )
}

export default App
