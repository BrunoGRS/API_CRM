import {DataSource} from "typeorm"
import { Custumer } from "../models/custumerModel"
import { Task } from "../models/taskModel"


export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "dbcrm",
    entities: [Custumer, Task]
})
