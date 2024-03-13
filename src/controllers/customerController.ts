import { Response, Request } from "express";
import { Custumer } from "../models/custumerModel";
import { Connection } from "../database/database";
import { customerRepository} from "../repositories/custumerRepository";

export class customerControl {
        
    async createCustomer(req: Request, res: Response){
        
        try {

            const customerRepo = customerRepository

            let customer = {
                name: req.body.name,
                email: req.body.email,
                isActive: req.body.isActive
            }
    
            let newCustomer = customerRepo.create(customer)
            console.log(newCustomer)

            await customerRepo.save(newCustomer).then((data)=>{
                res.status(201).send({msg:`Customer created sucess! Name: ${data.name}`})
            },(error)=>{
                console.error('Created Error', error)
            })
            
            
            
        } catch (error) {
            console.error(error)
        }
      
    }
}