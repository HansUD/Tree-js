// tree.js
import fs from 'fs';
import path from 'path';

function printTree(dir, prefix = '', ignore = [], level = Infinity) {
  if (level < 0) return;

  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Error al leer el directorio: ${dir}`);
    return;
  }

  entries = entries
    .filter(entry => !ignore.includes(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  entries.forEach((entry, index) => {
    const isLast = index === entries.length - 1;
    const pointer = isLast ? '└── ' : '├── ';
    console.log(prefix + pointer + entry.name);

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      printTree(fullPath, newPrefix, ignore, level - 1);
    }
  });
}

// CLI usage
const args = process.argv.slice(2);

const getArg = (key, def = undefined) => {
  const idx = args.indexOf(key);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : def;
};

const targetDir = getArg('--path', '.');
const ignoreList = getArg('--ignore', '').split(',').filter(Boolean);
const maxLevel = parseInt(getArg('--level', 'Infinity'));

printTree(path.resolve(targetDir), '', ignoreList, maxLevel);
