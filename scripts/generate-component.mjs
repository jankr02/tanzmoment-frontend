import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];
if (!name) {
  console.error('Please provide a component name');
  process.exit(1);
}

const kebab = name
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/\s+/g, '-')
  .toLowerCase();
const title = `Components/${name}`;

const templatesDir = path.join(__dirname, '..', 'templates', 'component');
const targetDir = path.join(__dirname, '..', 'src', 'components', kebab);
fs.mkdirSync(targetDir, { recursive: true });

const replacements = {
  __Name__: name,
  __KebabName__: kebab,
  __kebabname__: kebab,
  __Title__: title
};

for (const file of fs.readdirSync(templatesDir)) {
  const content = fs
    .readFileSync(path.join(templatesDir, file), 'utf8')
    .replace(/__Name__/g, replacements.__Name__)
    .replace(/__KebabName__/g, replacements.__KebabName__)
    .replace(/__kebabname__/g, replacements.__kebabname__)
    .replace(/__Title__/g, replacements.__Title__);
  const target = path
    .join(targetDir, file.replace('Component', name).replace(/\.tpl$/, ''));
  fs.writeFileSync(target, content, 'utf8');
}

console.log(`Component ${name} created at src/components/${kebab}`);
