import LoggerFileConfig from './LoggerFileConfig';

export default interface DefaultLoggerFileConfig extends LoggerFileConfig {
  enabled: boolean;
  dateFormat: string;
  dirname: string;
  extension: string;
  filename: string;
  maxFiles: string;
  maxSize: string;
  zippedArchive: boolean;
}
