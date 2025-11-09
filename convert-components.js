const fs = require('fs');
const path = require('path');

// Function to process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file uses hooks
  const usesHooks = /use(State|Effect|Ref|Context|Callback|Memo|Reducer)/.test(content);

  // Check if already has 'use client'
  const hasUseClient = /['"]use client['"]/.test(content);

  // Add 'use client' if needed
  if (usesHooks && !hasUseClient) {
    content = `'use client';\n\n${content}`;
    modified = true;
  }

  // Replace asset imports with public paths
  // Pattern: import imageName from '../assets/images/...'
  const importPattern = /import\s+(\w+)\s+from\s+['"]\.\.\/assets\/images\/([^'"]+)['"]/g;

  let match;
  const imports = [];

  while ((match = importPattern.exec(content)) !== null) {
    imports.push({
      varName: match[1],
      imagePath: match[2]
    });
  }

  if (imports.length > 0) {
    // Remove the import statements (including the entire line)
    content = content.replace(/import\s+\w+\s+from\s+['"]\.\.\/assets\/images\/[^'"]+['"];\n?/g, '');

    // Replace usage of imported variables with public paths
    imports.forEach(({ varName, imagePath }) => {
      const publicPath = `/images/${imagePath}`;
      // Replace variable usage with string path
      content = content.replace(new RegExp(`\\{${varName}\\}`, 'g'), `"${publicPath}"`);
      content = content.replace(new RegExp(`src=${varName}`, 'g'), `src="${publicPath}"`);
      content = content.replace(new RegExp(`\\b${varName}\\b(?!\\s*:)`, 'g'), `"${publicPath}"`);
    });

    modified = true;
  }

  // Write back if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
  } else {
    console.log(`- Skipped: ${filePath}`);
  }
}

// Get all component files
function getAllComponentFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllComponentFiles(fullPath));
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      if (!item.includes('-next')) { // Skip our converted files
        files.push(fullPath);
      }
    }
  });

  return files;
}

// Main execution
const componentsDir = path.join(__dirname, 'src', 'components');
const files = getAllComponentFiles(componentsDir);

console.log(`Found ${files.length} component files\n`);

files.forEach(file => {
  processFile(file);
});

console.log('\nConversion complete!');
