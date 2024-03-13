import { Connection } from "../database/database";
import { Custumer } from "../models/custumerModel";

export const customerRepository = Connection.getRepository(Custumer)