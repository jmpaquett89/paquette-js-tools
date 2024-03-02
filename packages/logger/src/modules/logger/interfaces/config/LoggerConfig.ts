import LoggerFileConfig from './LoggerFileConfig';
import LoggerMeta from './LoggerMeta';

export default interface LoggerConfig {
  file?: LoggerFileConfig;
  meta?: LoggerMeta | string;
}
