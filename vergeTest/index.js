const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname)));

// Route: send verge.html when someone visits /verge
app.get('/verge', (req, res) => {
    res.sendFile(path.join(__dirname, 'vergeTest.html'));
});

// Route: send verge.html when someone visits /api/verge
/*app.get('/api/helloworld', (req, res) => {
    res.sendFile(path.join(__dirname, 'helloworld.html'));
}); */

const port = process.env.PORT || 3978;
app.listen(port, () => {
    console.log(`VergeTest running at http://localhost:${port}/api/verge`);
});
