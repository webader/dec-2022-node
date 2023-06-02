//MODULES//
//імпорт модуля з файла sayHello.helper.js посилання на функцію sayHello
// const {sayHello} = require('./helpers/sayHello.helper')
//
// //викликаємо функцію яку імпортували
// sayHello();

//GLOBAL VARIABLES//
// //__dirname, __filename, process.cwd()
// console.log(__dirname); //виводить шлях до файла з якого викликають
// console.log(__filename);//виводить шлях включно з файлом який викликає
// console.log(process.cwd()); //CWD - current working directory

//PATH//
//модуль допомагає працювати зі шляхами (в вінді одні показують шлях \ в лінуксі інші/)
// const path = require('path');
//
// const joinedPath = path.join(__dirname,'folder', 'folder2','text.txt');
// const normalizePath = path.normalize('///test///test2/////test3//test4');
// const resolvedPath = path.resolve('folder', 'folder2','text.txt');//теж саме що і join тільки не треба прописувати __dirname
//
// console.log(joinedPath);
// console.log(normalizePath);
// console.log(resolvedPath);

//OS//
const os = require('os'); //підключення модуля OS
console.log(os.cpus());// покаже інфу про ядра
console.log(os.arch());//архітектура компа

const {exec} =require('child_process'); // маємо можливість запускати в баш лінуксових скриптів

// //fs//
const fs = require('fs');
const path = require('path');

//Створення файла text2.txt
fs.writeFile(path.join(__dirname, 'folder', 'folder2', 'text2.txt'), 'Hello from okten again', (err) => {
    if (err) throw new Error(err.message);
});


// fs.readFile(path.join(__dirname, 'folder', 'folder2', 'text2.txt'), (err, data)=>{
//  if (err) throw new Error(err.message);
//  console.log(data);
//
// }); - ось так покаже машинний код

fs.readFile(path.join(__dirname, 'folder', 'folder2', 'text2.txt'), {encoding: 'utf-8'}, (err, data) => {
    if (err) throw new Error(err.message);
    console.log(data);
}); // }); - ось так покаже зрозумілий текст
const text2Path = path.join(__dirname, 'folder', 'folder2', 'text2.txt'); //винисли шлях в окрему змінну щоб не писати багато далі
fs.appendFile(text2Path, '\njfhweoif', (err) =>{
    if (err) throw new Error(err.message);
}) //- додати в файл text2.txt ось таку фігню \jfhweoif \n з нового рядка

fs.truncate(text2Path,(err)=>{ //видалить всі дані з файла text2.txt
    if (err) throw new Error(err.message);
})

fs.unlink(text2Path,(err)=>{ //видалить цей файл text2.txt
    if (err) throw new Error(err.message);
})

fs.readdir(path.join(__dirname,'folder'), (err,files)=>{
    if (err) throw new Error(err.message);
    console.log(files);
}) //отримав масивом дані [ 'fkjb.txt', 'folder2', 'folder3' ]

fs.readdir(path.join(__dirname,'folder'), {withFileTypes:true},(err,files)=>{
    if (err) throw new Error(err.message);
    console.log(files);
})
// отримаю масив обєктів    [
//     Dirent { name: 'fkjb.txt', [Symbol(type)]: 1 },
// Dirent { name: 'folder2', [Symbol(type)]: 2 },
// Dirent { name: 'folder3', [Symbol(type)]: 2 }
// ]
fs.readdir(path.join(__dirname,'folder'), {withFileTypes:true},(err,files)=>{
    if (err) throw new Error(err.message);
    console.log(files);
    files.forEach(file=>{
        console.log(file.isFile());
    })
}) // withFileTypes:true - тому видасть тру на файл та 2 фолси на папки
//true
//false
//false

fs.mkdir(path.join(__dirname,'folder','folder4'),(err)=> {
     if (err) throw new Error(err.message);
}) //створив нову папку folder4

fs.rmdir(path.join(__dirname,'folder','folder4'),(err)=> {
     if (err) throw new Error(err.message);
}) //видалив папку folder4

fs.rm(path.join(__dirname,'folder','folder2'),{recursive:true},(err)=> {
     if (err) throw new Error(err.message);
}) //видалить папку folder2 зі файлами які в ній є

