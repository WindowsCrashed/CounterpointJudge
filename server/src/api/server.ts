import express from 'express'
import router from './routes/router'
import cors from 'cors'

const PORT = 3001

const app = express()

app.use(express.json())
app.use(cors())

router(app)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
