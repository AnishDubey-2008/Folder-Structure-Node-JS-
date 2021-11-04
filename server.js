require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3550;

// Setting View Engine
app.set('view engine', 'ejs');

// Setting the public folder as static
app.use(express.static(path.join(__dirname, 'public')));

// Mordern way of making an endpoint
app.get('/', require('./routes/siteRoutes'));

/* Basic way to make an endpoint:
app.get('/', (req, res) => {
     res.send('Hello, World!');
}); */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});