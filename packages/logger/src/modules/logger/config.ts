import { defaultExtension, defaultFilename } from '../../utils/constants';
import DefaultLoggerConfig from './interfaces/config/DefaultLoggerConfig';
import DefaultLoggerFileConfig from './interfaces/config/DefaultLoggerFileConfig';

const defaultFileConfig: DefaultLoggerFileConfig = {
  enabled: false,
  dateFormat: 'YYYY-MM-DD h:mm:ss',
  dirname: '.',
  extension: defaultExtension,
  filename: defaultFilename,
  maxFiles: '30d',
  maxSize: '20m',
  zippedArchive: true,
};

const defaultConfig: DefaultLoggerConfig = {
  file: defaultFileConfig,
  meta: {},
};

export default defaultConfig;
