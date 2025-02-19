const fs = require('fs-extra')

const dir1 = 'Папка 1'
    fs.ensureDirSync(dir1)   // Создаем папку 1


const file1 = `${dir1}/Файл 1.txt`
    fs.outputFileSync(file1, 'Домашнее задание создание файла')  // Создаем файл 1

const dir2 = 'Папка 2'
    fs.ensureDirSync(dir2)   // Создаем папку 2

    fs.moveSync(`${dir1}/Файл 1.txt`, `${dir2}/Файл 1.txt`)  // перемещаем файл 1 из папки 1 в папку 2

const dir3 = 'Папка 3'
    fs.ensureDirSync(dir3)   // Создаем папку 3

    fs.copySync(`${dir2}/Файл 1.txt`, `${dir3}/Файл 1.txt`)   // Копируем файл из папки 2 в папку 3

    fs.removeSync(`${dir2}/Файл 1.txt`)   // удаляем файл 1 из папки 2

    fs.removeSync(`${dir3}/Файл 1.txt`)   // удаляем файл 1 из папки 3

    fs.removeSync('Папка 1')    // удаляем папку 1

    fs.removeSync('Папка 2')   // удаляем папку 2

    fs.removeSync('Папка 3')   // удаляем папку 3