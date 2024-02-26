import LoggerLevels from '../modules/logger/interfaces/logger/LoggerLevels';

const defaultExtension: string = 'log';
const defaultFilename: string = '%DATE%-paquette';

const defaultDebugLevel: number = 5;
const defaultFatalLevel: number = 0;
const defaultErrorLevel: number = 1;
const defaultInfoLevel: number = 4;
const defaultTraceLevel: number = 3;
const defaultWarnLevel: number = 2;

const defaultLoggerLevels: LoggerLevels = {
  debug: defaultDebugLevel,
  error: defaultErrorLevel,
  fatal: defaultFatalLevel,
  info: defaultInfoLevel,
  trace: defaultTraceLevel,
  warn: defaultWarnLevel,
};

export { defaultExtension, defaultFilename, defaultLoggerLevels };
