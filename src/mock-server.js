const express = require('express')
const app = express();
app.use(express.static(__dirname,));
const data = require('./data/user-stats.json');

app.get('/user-stats', function (req, res) {
    // TODO need to filter data based on params
    return res.send(data);
});

app.listen(8080, () => console.log("Server running on port 8080"));
