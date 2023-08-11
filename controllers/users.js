import {v4 as uuid} from "uuid";

let users = []

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`)

  res.send(users)
}

export const createUser = (req, res) => {
  const user = req.body

  users.push({...user, id: uuid()})

  res.send(`User [${user.firstname}] added to the database`)
}

export const getUser = (req, res) => {
  // Solution 1:
  const { id } = req.params
  const foundUser = users.filter((user) => user.id === id)
  res.send(foundUser)

  // Solution 2:
  // res.send(req.params.id)
}

export const deleteUser = (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)
  res.send(users)
  console.log(`User with id: ${id} has been deleted.`)
}

export const updateUser = (req, res) => {
  const { id } = req.params
  const { firstname, lastname, age } = req.body

  const user = users.find((user) => user.id === id)

  user.firstname = firstname
  user.lastname = lastname
  user.age = age

  res.send(user)

  console.log(`firstname has been updated to ${firstname}, lastname has been updated to ${lastname}, age has been updated to ${age}`)
}
