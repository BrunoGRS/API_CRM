import express from "express"
import { customerControl } from "../controllers/customerController"

const routerCustomer = express.Router()

const customerController = new customerControl()

routerCustomer.post('/create', customerController.createCustomer)

export default routerCustomer