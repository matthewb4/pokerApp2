const express = require("express");
const path = require("path");
const app = express();
var cors = require('cors');
const port = 3001;

//Connect to Database
require("./database/connection.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use("/users", require("./routes/users.js"));

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`)});