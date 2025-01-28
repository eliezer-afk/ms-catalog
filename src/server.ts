import express from 'express'
import colors from 'colors'
import router from './routers/router'
import db from './config/db'

// Conectar a la BD
export async function connectDB() {
    console.log('Intentando conectar a la base de datos...'); // Agrega este log
    try {
        await db.authenticate();
        await db.sync();
        console.log(colors.bgBlue.white('Conexion Exitosa a la BD'));
    } catch (error) {
        console.log(colors.bgRed.white('Hubo un error al conectar a la BD'));
        console.error(error); // Imprime el error en detalle
    }
}
connectDB()


// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/catalog', router)

server.get('/api', (req, res) => {
    res.json({ msg: 'Desde API' })
})

export default server