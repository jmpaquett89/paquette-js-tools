import DefaultLoggerFileConfig from './DefaultLoggerFileConfig';
import LoggerConfig from './LoggerConfig';
import LoggerMeta from './LoggerMeta';

export default interface DefaultLoggerConfig extends LoggerConfig {
  file: DefaultLoggerFileConfig;
  meta: LoggerMeta;
}
