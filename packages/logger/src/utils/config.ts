import DefaultLoggerConfig from '../modules/logger/interfaces/config/DefaultLoggerConfig';
import DefaultLoggerFileConfig from '../modules/logger/interfaces/config/DefaultLoggerFileConfig';
import LoggerConfig from '../modules/logger/interfaces/config/LoggerConfig';

const mergeConfig = (
  defaultConfig: DefaultLoggerConfig,
  config: LoggerConfig = {},
): DefaultLoggerConfig => {
  const { file = { enabled: false }, meta = {} } = config;
  const { file: defaultFileConfig, meta: defaultMeta } = defaultConfig;

  const fileConfig: DefaultLoggerFileConfig = {
    ...defaultFileConfig,
    ...file,
  };
  const metaConfig = {
    ...defaultMeta,
    ...meta,
  };

  return {
    file: fileConfig,
    meta: metaConfig,
  };
};

export { mergeConfig };
