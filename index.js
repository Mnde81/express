// const express = require('express')

import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Labas rytas, Lietuva!')
})

app.listen(port, () => {
  console.log(`App running on: http://localhost:${port}`)
})