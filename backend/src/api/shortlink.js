import express from "express"
import { createShortlink, fetchShortlink, fetchShortlinks, updateShortlink, deleteShortlink } from "../controller.js/shortlinkController.js";

const api = express.Router()


api.post('/create',createShortlink)

api.get('/:id',fetchShortlink)

api.get('/',fetchShortlinks)

api.put('/update/:id',updateShortlink)

api.delete('/delete/:id',deleteShortlink)

export default api;