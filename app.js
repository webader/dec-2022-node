//ДЗ:
// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
//
// FILE: {fileName}
// FOLDER: {folderName}
//
// !руками нічого не робимо, все через fs

const fs = require('node:fs/promises');
const path = require('node:path');

const foo = async () => {
    //Створення папки 'baseFolder'
    const basePath = path.join(process.cwd(), 'baseFolder');

    await fs.mkdir(basePath, {recursive: true});
    const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
    const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];

    for (const file of fileNames) {
        await fs.writeFile(path.join(basePath, file), 'HELLO');
    }
    for (const folder of folderNames) {
        await fs.mkdir(path.join(basePath, folder), {recursive: true});
    }

    const files = await fs.readdir(basePath);
    for (const file of files) {
        const stat = await fs.stat(path.join(basePath, file));
        console.log(path.join(basePath, file), ' : ', stat.isDirectory() ? 'folder' : 'file');
    }
}
foo();


// const foo = async () => {
//     const basePath = path.join(process.cwd(), 'baseFolder');
//
//     await fs.mkdir(basePath, {recursive: true});
//     const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
//     const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];
//
//     for (const folder of folderNames) {
//         const folderPath = path.join(basePath, folder);
//         await fs.mkdir(folderPath, {recursive: true});
//
//         for (const file of fileNames) {
//             await fs.writeFile(path.join(folderPath, file), 'HELLO');
//         }
//     }
//
//     const files = await fs.readdir(basePath);
//     for (const file of files) {
//         const stat = await fs.stat(path.join(basePath, file));
//         console.log(path.join(basePath, file), ' : ', stat.isDirectory() ? 'folder' : 'file');
//     }
// }
// foo();


// const foo = async () => {
//     const basePath = path.join(process.cwd(), 'baseFolder');
//
//     await fs.mkdir(basePath, {recursive: true});
//     const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt', 'file6.txt'];
//     const folderNames = ['folder1', 'folder2', 'folder3', 'folder4'];
//
//     await Promise.all(folderNames.map(async (folder) => {
//         const folderPath = path.join(basePath, folder);
//         await fs.mkdir(folderPath, {recursive: true});
//
//         await Promise.allSettled(fileNames.map(async (file) => {
//             await fs.writeFile(path.join(folderPath, file), 'HELLO');
//         }));
//     }));
//
//     const files = await fs.readdir(basePath);
//     for (const file of files) {
//         const stat = await fs.stat(path.join(basePath, file));
//         console.log(path.join(basePath, file), ' : ', stat.isDirectory() ? 'folder' : 'file');
//     }
// }
foo();
