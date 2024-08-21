const fs = require('fs/promises');
const { glob } = require('glob');
const path = require('path');

const languages = ['javascript', 'typescript'];

const ensureDirectoryExists = async (outputPath) => {
  try {
    await fs.mkdir(outputPath, { recursive: true });
    await fs.access(outputPath, fs.constants.R_OK | fs.constants.W_OK);
  } catch (err) {
    console.error(`Failed to ensure directory exists: ${outputPath}`, err);
    throw err;
  }
};

const merge = async ({ language, files }) => {
  const output = {};
  const outputPath = path.join('./snippets', `${language}.json`);

  console.log(`Starting merge for ${language}...`);

  await ensureDirectoryExists('./snippets');

  for (const filename of files) {
    try {
      console.log('Reading file:', filename);
      const contents = await fs.readFile(filename, 'utf8');
      Object.assign(output, JSON.parse(contents));
    } catch (err) {
      console.error(`Failed to read or parse file: ${filename}`, err);
      continue;
    }
  }

  try {
    await fs.writeFile(outputPath, JSON.stringify(output, null, 2), 'utf8');
    console.log(`Merge complete for ${language}!`);
  } catch (err) {
    console.error(`Failed to write output file: ${outputPath}`, err);
    throw err;
  }
};

const processLanguages = async () => {
  try {
    const commonFiles = await glob('src/commons/*.json');

    for (const language of languages) {
      console.log(`Initiating file globbing for ${language}...`);

      const languageFiles = await glob(`src/${language}/*.json`);

      const allFiles = [...commonFiles, ...languageFiles];

      if (allFiles.length === 0) {
        console.log(`No files found for ${language}. Skipping.`);
        continue;
      }

      try {
        await merge({ language, files: allFiles });
      } catch (err) {
        console.error(`Failed to merge files for ${language}:`, err);
      }
    }
  } catch (err) {
    console.error('Failed to process languages:', err);
  }
};

processLanguages();
