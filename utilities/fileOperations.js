const fs = require('fs');
const path = require('path');

function createDirectories(basePath, directories) {
    directories.forEach(dir => {
        const dirPath = path.join(basePath, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
}

function createFiles(basePath, files) {
    files.forEach(file => {
        const filePath = path.join(basePath, file.path);
        fs.writeFileSync(filePath, file.content);
        console.log(`Created file: ${filePath}`);
    });
}

module.exports = { createDirectories, createFiles };
