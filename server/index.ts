import express from 'express';

const app = express();

app.get('/test', (req,res)=>{
  res.send("Hello3")
})

app.listen(3001, (err)=>{
  if(err){
    throw Error('some error')
  }
  console.log('Server runned!')
})    