const express = require('express');
const cors = require('cors');
const server = express();
const port = 6000;

server.use(cors());

server.get('/', (req,res)=> {
   res.send([{ 
             id:'1',
              img:""
    },
   ]);
});

server.listen(port);

console.log(`Ваш  сервер был запущен  на порту http://localhost:${port}`);