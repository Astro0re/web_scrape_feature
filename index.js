require('dotenv').config();
const express = require("express")
const path = require("path")
const fs = require('fs');
const { execFile } = require("child_process")
const { getJson } = require('serpapi');

const app = express()
const PORT = 3000
const API_KEY=process.env.KEY
const DOWNLOADS_DIR = path.join(__dirname, "Scrappy-downloads")

if (!fs.existsSync(DOWNLOADS_DIR)){
    fs.mkdirSync(DOWNLOADS_DIR)
}

app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.use("/Scrappy-downloads", express.static(DOWNLOADS_DIR))

app.get("/api/search", (req,res) => {
    const { q,count = 5} = req.query

    if (!q){
        return res.status(400).json({error: "Query parameter 'q' required"})
    }

    getJson({
        engine :"google",
        q,
        api_key : API_KEY
        
        }, (json) =>{
            const info = {json}
            }
    )

})

getJson(
    {engine : "google",
    q : "Dragons",
    api_key : API_KEY}, (json) =>{
        fs.writeFileSync('output.json', JSON.stringify(json, null, 2));
        console.log('Results saved to output.json');
    }
);