import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import seriesData from '../data/series.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(seriesData)
  })

  router.get('/:seriesId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/series.html'))
  })



  export default router;