import express from "express";

import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js'

const router = express.Router()

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router
