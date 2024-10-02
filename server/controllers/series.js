import { pool } from '../config/database.js'

const getSeries = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM series ORDER BY id ASC');
        res.status(200).json(results.rows)

    }
    catch (error) {
        res.status(409).json( { error: error.message } )
      }
};

const SeriesController = {
    getSeries: getSeries                 
  }
  
  export default SeriesController;

  

