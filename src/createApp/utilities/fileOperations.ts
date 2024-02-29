import fs from 'fs';
import path from 'path';

export interface CreateDirectories { 
    basePath: string; directories: string[];
}

export function createDirectories({basePath, directories}: CreateDirectories) {
    directories.forEach(dir => {
        const dirPath = path.join(basePath, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
}

export interface CreateFiles { 
    basePath: string; files: {
    path: string;
    content: string;
}[];
}

export function createFiles({basePath, files}: CreateFiles) {
    files.forEach(file => {
        const filePath = path.join(basePath, file.path);
        fs.writeFileSync(filePath, file.content);
        console.log(`Created file: ${filePath}`);
    });
}

