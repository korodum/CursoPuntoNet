const fs = require('fs');
const express = require('express')
const route = '../style/media';
const app = express();
const port = 3000;
const files = JSON.stringify( fs.readdirSync(route));

app.listen(3000, () => {
  console.log(`Server running on port ${port}`);

});

app.get ('/', (req, res) => {
  res.send(files);
})