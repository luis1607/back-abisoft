import express from "express";
import { deleteClient, editClient, getClients, newClient, getClient } from "../controllers/clientController.js";

const router = express.Router()

router.route('/')
    .get(getClients)
    .post(newClient)

router.route('/:id').put(editClient).get(getClient)
.delete(deleteClient)

export default router;