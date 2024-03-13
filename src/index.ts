import { Connection } from "./database/database";
import express from "express"
import routerCustomer from "./routes/costumerRoutes";

const app = express()

app.use(express.json())

app.use('/customer', routerCustomer)


Connection.initialize().then(()=>{
    app.listen(3000, ()=>{
        console.log('App Iniciado')
    })
    console.log('Conexão Efetuada com Sucesso!')
},(error)=>{
    console.log('Conexão não executada', error)
})
