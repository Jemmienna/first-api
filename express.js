const express = require('express');
const app = express();

app.use(express.json());
app.use('/hello', (req, res) => {
   res.json({ status: 'ok', msg: 'hello world' }
   ) 
});

app.listen(8080, () => console.log('server listening on port 8080'));
