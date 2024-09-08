
const express = require('express')
const app = express()




const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
};


const path = require('path');

const pathToDistFolder = path.join(__dirname, '../homework/dist');


const serveStatic = express.static(pathToDistFolder);

app.use(logRoutes)
app.use(serveStatic)

const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`hello ${name}`);
}



app.get('/api/hello', serveHello)


const port = 8080;
app.listen(port, () => {
    console.log(`Server is now running on http://localhost:${port}`);
});