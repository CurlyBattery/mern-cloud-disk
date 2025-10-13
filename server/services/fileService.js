const fs = require('fs');
const config = require('config');

const File = require('../models/File');

class FileService {
  createDir(file) {
    return new Promise((resolve, reject) => {
      const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`;
      try {
        if(!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({message: 'File was created'})
        } else {
          return reject({ message: 'File already exists'})
        }
      } catch (e) {
        return reject({ message: 'File error' });
      }
    })
  }
}

module.exports = new FileService();
