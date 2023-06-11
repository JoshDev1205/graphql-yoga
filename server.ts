// 1. Creamos nuestro archivo server.ts
import express from 'express'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

const app = express()

// 2. Inicializamos una instancia de yoga
// le pasamos el schema como parametro
const yoga = createYoga({
  schema,
})

// 3. Asociamos una ruta a nuestro servidor
// para acceder a nuestra api de graphql
app.use('/graphql', yoga)

app.listen(4000)
