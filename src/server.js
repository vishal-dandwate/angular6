import express  from 'express';
let app = express();
app.get('/', (req, res) => {
    res.send('hi vishal dandwate');
}).listen(8080, () => console.log('server port on 8080'));