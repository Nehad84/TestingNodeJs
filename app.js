const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('ok');
});


PORT= process.env.PORT|| 3000;
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`);
});