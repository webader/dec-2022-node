//ДЗ:
// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
//
// FILE: {fileName}
// FOLDER: {folderName}
//
// !руками нічого не робимо, все через fs

const fs = require('fs');
const path = require('path');

//Створюємо папку 'folder'
fs.mkdir(path.join(__dirname, 'folder'), (err) => {
    if (err) throw new Error(err.message);
})

// Створюємо  файл text.txt в папці 'folder'
fs.writeFile(path.join(__dirname, 'folder', 'text.txt'), 'Hello from again', (err) => {
    if (err) throw new Error(err.message);
})

//Створюємо папку 'folder2'
fs.mkdir(path.join(__dirname, 'folder2'), (err) => {
    if (err) throw new Error(err.message);
})

// Створюємо  файл text2.txt в папці 'folder2'
fs.writeFile(path.join(__dirname, 'folder2', 'text2.txt'), 'Hello from again', (err) => {
    if (err) throw new Error(err.message);
})

//Створюємо папку 'folder3'
fs.mkdir(path.join(__dirname, 'folder3'), (err) => {
    if (err) throw new Error(err.message);
})

// Створюємо  файл text3.txt в папці 'folder'
fs.writeFile(path.join(__dirname, 'folder3', 'text3.txt'), 'Hello from again', (err) => {
    if (err) throw new Error(err.message);
})

//Створюємо папку 'folder4'
fs.mkdir(path.join(__dirname, 'folder4'), (err) => {
    if (err) throw new Error(err.message);
})

// Створюємо  файл text4.txt в папці 'folder4'
fs.writeFile(path.join(__dirname, 'folder4', 'text4.txt'), 'Hello from again', (err) => {
    if (err) throw new Error(err.message);
})

//Створюємо папку 'folder5'
fs.mkdir(path.join(__dirname, 'folder5'), (err) => {
    if (err) throw new Error(err.message);
})

// Створюємо  файл text5.txt в папці 'folder5'
fs.writeFile(path.join(__dirname, 'folder5', 'text.txt5'), 'Hello from again', (err) => {
    if (err) throw new Error(err.message);
})

