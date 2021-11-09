const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tmldf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
     console.log('connection success')
     
    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);

console.log(uri)

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(port,()=>{
    console.log(`Server is running on ${port} `)
})