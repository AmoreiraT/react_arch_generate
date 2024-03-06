import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export interface CreateDirectories { 
    basePath: string; directories: string[];
}

export function createDirectories({basePath, directories}: CreateDirectories) {
    directories.forEach(dir => {
        const dirPath = join(basePath, dir);
        if (!existsSync(dirPath)) {
            mkdirSync(dirPath, { recursive: true });
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
        const filePath = join(basePath, file.path);
        writeFileSync(filePath, file.content);
        console.log(`Created file: ${filePath}`);
    });
}

