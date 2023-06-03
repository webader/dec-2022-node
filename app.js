// //lesson 2 events and express
// const events = require('node:events'); //підключаємо собитія з ноди
//
// const eventEmitter = new events();
//
// //Обявляємо цей евент, спочатку перший параметр який буде евент "click" а другий параметр колбек функція
// eventEmitter.on('click',()=>{
//   console.log('Click click click')
// })
//
// eventEmitter.emit('click'); //виклик собитія, через node app бачимо Click click click
// eventEmitter.emit('click'); //викликати подію/event можно скільки хочеш раз
// eventEmitter.emit('click'); //викликати подію/event можно скільки хочеш раз
// eventEmitter.emit('click'); //викликати подію/event можно скільки хочеш раз і вона буде працювати
//
// console.log(eventEmitter.eventNames()); // метод який вертає масив зі всьома задекларованими на разі евентами
//
// //якщо евент обявляєтьс через "once" то викликати можемо скільки хочеш але після першого виклику подія вмирає і викликати не можемо
// eventEmitter.once('clickAndDie', ()=>{
//   console.log('Clicked and died');
// })
// console.log(eventEmitter.eventNames()); // метод який вертає масив зі всьома задекларованими на разі евентами
// eventEmitter.emit('clickAndDie'); //викликати подію/event можно скільки хочеш раз і вона буде працювати тільки після першого визова
//
// eventEmitter.emit('clickAndDie');//тут вже не спрацює подія
//
// //

//Буферізація стріми і чанки (маленьки кусочки)
//використовують для того щоб підтягувати якісь дані кусочками (гарний приклад ютуб який підтягує кусочками відео)
//
// const fs=require('node:fs');
// const path = require('node:path');
//
// const readStream = fs.createReadStream('text.txt', {highWaterMark:128*1024});
// // //{highWaterMark:128*1024} показуємо який розмір може бути цього чанка, без нього були чанки по 64к зараз по 128к
// // readStream.on('data',(chunk)=>{
// //   console.log(chunk);
// // })
// //можемо передати стрим з одного файла text.txt в інший файл стрим text2.txt
// const writeStream = fs.createWriteStream('text2.txt');
// // readStream.on('data',(chunk)=>{
// //   writeStream.write(chunk)
// // });
//
// // Є більш легкий спосіб передавати чанки
// readStream.pipe(writeStream);
// //він сам зчитає зі стріма отримає певний чанк з стріма і цей чанк він прокине в середину writeStream
//
// //Помилку реадстрима ми теж можемо відловити
// readStream
//   .on('error', ()=>{
//     console.log('error'); //вивести помилку
//     readStream.destroy()//знищуємо стрим щоб не жрав процес на компі якщо йде помилка стрім далі працює
//   })
//   .pipe(writeStream);
//
//

//Express
//Expressjs.com
const users = [
  {
    name: 'Oleg',
    age: 20
  },
  {
    name: 'andriy',
    age: 20
  },
  {
    name: 'stas',
    age: 20
  }
];
const express = require('express')
const app = express()
const port = 5000

app.use(express.json()); //вчить читати джсон
app.use(express.urlencoded({extended:true}));//вчить читати квери
app.get('/users', (req, res) => {
  //res.send('Hello World!')
  res.status(200).json(users)
})
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users[+id];
  if (!user) {
    //do somthing
    res.send('Not have user with id');
  }
  res.status(200).json(users[+id])
})

app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})

//lsof -i :5000 команда перевірки чи занят порт

app.post ('/users', (req,res) =>{
  //console.log(req.body) має зявитись в консолі васіліна з програми постпон
  users.push(req.body);
  res.status(201).json({
    message : "User created"
  })
});

app.put('/users/:id',(req,res)=>{
  const { id } = req.params;
  users[+id]=req.body;
  res.status(200).json({
    message:"User updated",
    data: users[+id],
  })
})

app.delete('/user/:id',(req,res)=>{
  const { id } = req.params;
  users.splice(+id, 1);
  res.status(200).json({
    message:"User deleted"
  })
})



