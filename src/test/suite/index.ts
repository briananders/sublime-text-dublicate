import * as path from 'path';
import * as fs from 'fs';
import Mocha from 'mocha';

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.test.js')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
  });

  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((resolve, reject) => {
    try {
      const files = getAllFiles(testsRoot);

      // Add files to the test suite
      files.forEach((f) => mocha.addFile(f));

      // Run the mocha test
      mocha.run((failures: number) => {
        if (failures > 0) {
          reject(new Error(`${failures} tests failed.`));
        } else {
          resolve();
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      reject(err);
    }
  });
}
