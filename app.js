const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path');
const noteRoutes = require('./routes/noteRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Set the views folder (optional, defaults to ./views)
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => 
    res.sendFile(__dirname + '/public/html/index.html')
);

// Routes
app.use('/api/notes', noteRoutes);


// connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});