import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async () => {
  const filename = join(__dirname, '..', 'test.sqlite');
  try {
    await rm(filename);
  } catch {}
});
