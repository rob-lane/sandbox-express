const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
import { Projection } from '../models/projection';
import { parse } from 'csv-parse';
import { delimiter } from 'path';
import { off } from 'process';

const projectionsData = path.join(__dirname, '..', 'dummy', 'projections.csv');
const projections : Array<Projection> = [];

const parseCsv = parse({
    delimiter   : ',',
    columns     : true,
})

fs.createReadStream(projectionsData)
    .pipe(parseCsv)
    .on('data', (row) => {
        projections.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
});

for (const projection of projections) { 

}