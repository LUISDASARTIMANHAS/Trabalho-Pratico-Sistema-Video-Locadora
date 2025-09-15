const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');

const defaultEnvContent = `
NODE_ENV=development
VITE_ENV=development
REACT_APP_ENV=development
`.trim(); // Remove espaços extras

// Verifica se o arquivo .env já existe
if (fs.existsSync(envPath)) {
  console.log('.env já existe. Nenhuma ação necessária.');
} else {
  // Cria o arquivo com variáveis padrão
  try {
    fs.writeFileSync(envPath, defaultEnvContent + '\n', { encoding: 'utf8' });
    console.log('.env criado com sucesso com as variáveis padrão.');
  } catch (err) {
    console.error('Erro ao criar o arquivo .env:', err);
    process.exit(1);
  }
}
