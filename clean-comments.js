const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  if (filePath.endsWith('.css')) {
     content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
     // Remove {/* ... */}
     content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
     // Remove /* ... */
     content = content.replace(/\/\*[\s\S]*?\*\//g, '');
     
     // Remove // comments ensuring we don't break simple URLs
     let lines = content.split('\n');
     content = lines.map(line => {
        let commentIdx = line.indexOf('//');
        if (commentIdx !== -1 && line.indexOf('://') === -1) {
            return line.slice(0, commentIdx).trimEnd();
        }
        return line;
     }).join('\n');
  }
  
  if (content !== original) {
      // Clean up empty lines that were left behind
      content = content.split('\n').filter((line, idx, arr) => {
          // If this line is empty, and the original line had a comment, remove it
          return true; // We'll just do a simple squeeze of 3+ newlines to 2
      }).join('\n');
      
      content = content.replace(/\n{3,}/g, '\n\n');
      
      // Additional cleanup for empty lines with spaces
      content = content.replace(/^\s+$/gm, '');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Cleaned:', filePath);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath);
      } else if (fullPath.match(/\.(css|jsx|js)$/)) {
          processFile(fullPath);
      }
  });
}

walk(path.join(__dirname, 'src'));
