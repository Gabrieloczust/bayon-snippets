import { execSync } from 'child_process';
import { version } from '../package.json';
import path from 'path';

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
} catch (error: any) {
  console.error(`${RED} ❌ Erro ao instalar a extensão: ${error.message}`);
  process.exit(1);
}
