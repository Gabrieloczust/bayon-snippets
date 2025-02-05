const { execSync } = require('child_process');
const { version } = require('../package.json');
const path = require('path');

const fileName = `vscode-bayon-snippets-${version}.vsix`;
const filePath = path.resolve(__dirname, '../', fileName);

// Sequências ANSI para cores
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';

try {
  console.log(`${BLUE} 🔧 Instalando extensão: ${filePath}`);
  execSync(`code --install-extension "${fileName}"`, { stdio: 'inherit' });
  console.log(`${GREEN} ✅ Extensão ${fileName} instalada com sucesso!`);
} catch (error) {
  console.error(`${RED} ❌ Erro ao instalar a extensão: ${error.message}`);
  process.exit(1);
}
