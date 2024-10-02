import express from 'express'
import path from 'path'
import SeriesController from '../controllers/series.js'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// router.get('/', (req, res) => {
//     res.status(200).json(seriesData)
//   })

  router.get('/', SeriesController.getSeries)

  router.get('/:seriesId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/series.html'))
  })



  export default router;