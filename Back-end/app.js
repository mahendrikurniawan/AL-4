const express = require('express');
const app = express();
const cors = require('cors');

const mainRoutes = require('./src/routes/routes')

// parse requests of content-type - application/json
app.use(express.json());
//use cors
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        'Service': "al4_project API"
    });
})

// register main routes
app.use('/api/', mainRoutes);

// return not found on all non-registered routes
app.get('*', (req, res) => {
    res.redirect('/api/not-found');
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`tes API Service is running on port ${PORT}. ${process.env.DEV == 'TRUE'? "<Development Mode>" : ""}`);
});