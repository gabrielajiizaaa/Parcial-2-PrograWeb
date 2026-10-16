import express from 'express'
import cors from 'cors'
import sql from 'mssql'

const app = express()
app.use(cors())

const config = {
  server: process.env.DB_SERVER,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  options: { trustServerCertificate: true },
}

app.get('/productos', async (req, res) => {
  try {
    const pool = await sql.connect(config)
    const result = await pool.request().query('SELECT IdProducto AS id, Nombre AS nombre, Categoria AS categoria, Precio AS precio, Stock AS stock FROM Productos')
    res.json(result.recordset)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(process.env.PORT, () => console.log(`Servidor en http://localhost:${process.env.PORT}`))
