const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'Public')));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`);
});
