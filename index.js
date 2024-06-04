import cors from "cors"
import express from 'express' 
import bodyParser from "body-parser";
import UsersRouter from './Routers/UsersRouters.js'
import LinksRouter from './Routers/LinksRouter.js'
import connectDB from './DB.js';
const app = express()
// dotenv.config()
const port = 4000
connectDB();//חיבור לDB
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/users',UsersRouter)
app.use('/links',LinksRouter)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})