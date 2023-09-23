import express from 'express';
import model from "./src/routes/expens.js"
const app = express();

//global middleware------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes----------------------------------------------------------------------------

app.use('/expense',model)


export default app;