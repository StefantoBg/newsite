const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the 'web' folder
app.use(express.static(path.join(__dirname, '')));

// If no specific file is requested, serve 'index.html'
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});