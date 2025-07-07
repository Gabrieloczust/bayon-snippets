import { PathLike } from 'fs';
import fs from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

const languages = ['javascript', 'typescript'];

// Sequências ANSI para cores
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const ensureDirectoryExists = async (outputPath: PathLike) => {
  try {
    await fs.mkdir(outputPath, { recursive: true });
    await fs.access(outputPath, fs.constants.R_OK | fs.constants.W_OK);
  } catch (err) {
    console.error(
      `${RED}❌ Failed to ensure directory exists: ${outputPath}`,
      err,
      RESET,
    );
    throw err;
  }
};

const merge = async ({
  language,
  files,
}: {
  language: string;
  files: string[];
}) => {
  const output = {};
  const outputPath = path.join('./snippets', `${language}.json`);

  console.log(`${BLUE}🔄 Starting merge for ${language}...${RESET}`);

  await ensureDirectoryExists('./snippets');

  for (const filename of files) {
    try {
      console.log(`${BLUE}📂 Reading file: ${filename}${RESET}`);
      const contents = await fs.readFile(filename, 'utf8');
      const parsedContent = JSON.parse(contents);

      Object.assign(output, parsedContent);
    } catch (err) {
      console.error(
        `${RED}❌ Failed to read or parse file: ${filename}`,
        err,
        RESET,
      );
      continue;
    }
  }

  try {
    await fs.writeFile(outputPath, JSON.stringify(output, null, 2), 'utf8');
    console.log(`${GREEN}✅ Merge complete for ${language}!${RESET}`);
  } catch (err) {
    console.error(
      `${RED}❌ Failed to write output file: ${outputPath}`,
      err,
      RESET,
    );
    throw err;
  }
};

const processLanguages = async () => {
  try {
    const commonFiles = await glob('src/commons/*.json');

    for (const language of languages) {
      console.log(
        `${BLUE}🔍 Initiating file globbing for ${language}...${RESET}`,
      );

      const languageFiles = await glob(`src/${language}/*.json`);
      const allFiles = [...commonFiles, ...languageFiles];

      if (allFiles.length === 0) {
        console.log(
          `${YELLOW}🚫 No files found for ${language}. Skipping.${RESET}`,
        );
        continue;
      }

      try {
        await merge({ language, files: allFiles });
      } catch (err) {
        console.error(
          `${RED}❌ Failed to merge files for ${language}:`,
          err,
          RESET,
        );
      }
    }
  } catch (err) {
    console.error(`${RED}❌ Failed to process languages:${RESET}`, err);
  }
};

processLanguages();
