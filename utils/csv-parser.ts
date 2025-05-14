const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
import { error } from 'console';
import { parse } from 'csv-parse';
import { delimiter } from 'path';
import { off } from 'process';
import { prisma } from '../db/connection';

const projectionsData = path.join(__dirname, '..', 'dummy', 'projections.csv');

export async function clearProjections() { 
    const result = await prisma.commodity.deleteMany({});
    console.log('Deleted all projections:', result);
    return result;
}

export function loadProjections(csvfile: string) { 
    const fileStream = fs.createReadStream(csvfile)
    fileStream.pipe(parse({delimiter: ',', columns: true})).on('data', async (row: { Commodity: any; CommodityType: any; Units: any; YearType: any; Year: any; Value: any; }) => {
        console.log('row:', row);
        const result = await prisma.commodity.create({
            data: { 
                name: row.Commodity,
                type: row.CommodityType,
                units: row.Units,
                yearType: row.YearType,
                year: parseInt(row.Year.split('/')[0]),
                value: parseInt(row.Value)
            }
        })
    }).on('error', (error: any) => {
        console.error('Error parsing CSV file:', error);
    });
}