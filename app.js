const express = require('express');

const path = require('path');
const router = express.Router();
 

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
    }
);


app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/aboutMe.html'));
    }
);

app.listen(3000, () => console.log('Server running on port 3000')
);
