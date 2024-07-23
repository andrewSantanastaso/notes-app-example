require('dotenv')
const express = require('express')
const app = express()
const logger = require('morgan')
const mongoose = require('mongoose')
const Note = require('./models/note.js')

const MONGO_URI = process.env.MONGO_URI

app.use(express.json)