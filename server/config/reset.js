
import { pool } from './database.js'; 
import './dotenv.js';                
import seriesData from '../data/series.js';


const createSeriesTable = async () => {
    const createTableQuery  = `
        DROP TABLE IF EXISTS series;

        CREATE TABLE IF NOT EXISTS series (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            releaseyear VARCHAR(10) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            synopsis TEXT NOT NULL,
            streamingplatform VARCHAR(255) NOT NULL,
            imdbrating VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery)
        console.log('Series table created successfully.');
    } catch (error) {
        console.error('Error creating series table:', error);
    }
};


const seedSeriesTable = async () => {
    await createSeriesTable();

    seriesData.forEach((show) => {
        const insertQuery = {
        text: 'INSERT INTO series (name, releaseyear, genre, image, synopsis, streamingplatform, imdbrating) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    };

    
        const values = [
            show.name,
            show.releaseyear,        
            show.genre,              
            show.image,
            show.synopsis,           
            show.streamingplatform,   
            show.imdbrating          
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting show', err)
                return
            }

            console.log(`✅ ${show.name} added successfully`)
        })
    })
}

seedSeriesTable();
