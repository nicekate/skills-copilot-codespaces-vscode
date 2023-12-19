// Create web server
// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Create web server
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set port
const port = 3000;

// Set path
const pathToComments = path.join(__dirname, 'comments.json');

// GET request
app.get('/comments', (req, res) => {
    try {
        const comments = fs.readFileSync(pathToComments, 'utf8');
        res.json(JSON.parse(comments));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Unable to read comments.' });
    }
});

// POST request
app.post('/comments', (req, res) => {
    try {
        const comments = fs.readFileSync(pathToComments, 'utf8');
        const commentsArray = JSON.parse(comments);
        commentsArray.push(req.body);
        fs.writeFileSync(pathToComments, JSON.stringify(commentsArray));
        res.json({ success: 'Comment posted.' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Unable to post comment.' });
    }
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
