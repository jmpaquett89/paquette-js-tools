import { Logger } from '.';
import viteConfig from '../vite.config';
import vitestConfig from '../vitest.config';

console.log(
  '\n\n********************************************************************************\n\n',
);

const lg = new Logger('lg');

console.log(lg);

lg.debug('debug test');
lg.error('error test');
lg.fatal('fatal test');
lg.info('info test');
lg.trace('trace test');
lg.warn('warn test');

console.log(
  '\n\n********************************************************************************\n\n',
);

console.log({ viteConfig, vitestConfig });
