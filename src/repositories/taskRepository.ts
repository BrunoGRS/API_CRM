import { Connection } from "../database/database";
import { Task } from "../models/taskModel";

export const taskRepository = Connection.getRepository(Task)