const path = require('path');

function resolvePath(relativePath) {
    try {
        const absolutePath = path.resolve(__dirname, relativePath);
        return absolutePath;
    } catch (error) {
        console.error('Error resolving path:', error);
        return null;
    }
}

console.log('Resolved path:' + resolvePath('../project/folder/file.txt'));
console.log('Resolved path:' + resolvePath('nonexistent-folder/file.txt'));
