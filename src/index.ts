import express from 'express';
import * as fs from 'fs';
import path from 'path';

const app = express();
const PORT = 80;

app.use(express.static(path.join('./public/')));

const loadRoutesFromDir = async (dirPath: string, routePrefix: string) => {
  const fullDirPath = path.resolve(__dirname, dirPath);

  if (!fs.existsSync(fullDirPath)) {
    console.warn(`❌ Le dossier "${fullDirPath}" n'existe pas.`);
    return;
  };

  const files = fs.readdirSync(fullDirPath);

  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.js')) continue;

    const routePath = path.join(fullDirPath, file);

    try {
      const routeModule = await import(routePath);
      const baseName = file.replace(/\.(ts|js)$/, '');
      const routeName = baseName === 'index' ? '' : '/' + baseName;
      const fullRoute = routePrefix + routeName;

      if (typeof routeModule.default === 'function') {
        app.use(fullRoute, routeModule.default);
        console.log(`✅ Route chargée: ${fullRoute || '/'} depuis ${file}`);
      } else {
        console.warn(`⚠️ ${file} ne contient pas une exportation par défaut de type fonction.`);
      };
    } catch (err) {
      console.error(`❌ Erreur lors du chargement de ${file}:`, err);
    };
  };
};

loadRoutesFromDir('./api', '/api');
loadRoutesFromDir('./pages/', '');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});