require('dotenv').config();
const fs = require('fs');
const { getJson } = require('serpapi');

getJson(
    {engine : "google",
    q : "Dragons",
    api_key : process.env.KEY}, (json) =>{
        fs.writeFileSync('output.json', JSON.stringify(json, null, 2));
        console.log('Results saved to output.json');
    }
);