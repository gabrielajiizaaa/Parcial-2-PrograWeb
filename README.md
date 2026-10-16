# Registro de Productos

## 1. Base de datos (Docker)

```bash
cd backend
cp .env.example .env
docker compose up -d
docker exec parcial2-sqlserver sh -c '/opt/mssql-tools18/bin/sqlcmd -C -f 65001 -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -i /database/productos.sql'
```

Conexión desde SSMS: servidor `localhost,1435`, usuario `sa`, contraseña la del archivo `.env`.

## 2. Backend

```bash
cd backend
npm install
npm start
```

GET: http://localhost:3000/productos

## 3. Frontend

```bash
npm install
npm run dev
```
