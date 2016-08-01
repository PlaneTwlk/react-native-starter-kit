import http from 'http';
import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
const fileName = 'db.json';

app.use(bodyParser.json());

app.get('/api/dashboard', (req, res) => {
  let data = fs.readFileSync(fileName, "utf8");
  res.type('application/json').send(data);
});

app.post('/api/post', (req, res) => {
  let data = fs.readFileSync(fileName, "utf8");
  data = JSON.parse(data);
  data.unshift(req.body);
  fs.writeFileSync(fileName, JSON.stringify(data));
  res.end();
});

app.listen(port, () => {
    console.log("Node app is running at localhost : " + port );
});
