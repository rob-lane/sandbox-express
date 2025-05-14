const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
import { error } from 'console';
import { PrismaClient } from '../generated/prisma/client';
import { parse } from 'csv-parse';
import { delimiter } from 'path';
import { off } from 'process';

const projectionsData = path.join(__dirname, '..', 'dummy', 'projections.csv');
const prisma = new PrismaClient();

const parseCsv = parse({
    delimiter   : ',',
    columns     : true,
});

export function loadProjections(csvfile: string) { 
    const fileStream = fs.createReadStream(csvfile);
    fileStream.pipe(parseCsv);

    parseCsv.on('data', (row) => {
        prisma.commodity.create({
            data: { 
                attrib: row.Attrib,
                name: row.Commodity,
                type: row.CommodityType,
                units: row.Units,
                yearType: row.YearType,
                year: row.Year,
                value: row.Value
            }
        })
    });

    parseCsv.end();
}