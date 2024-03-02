export default interface LoggerFileConfig {
  enabled: boolean;
  dateFormat?: string;
  dirname?: string;
  extension?: string;
  filename?: string;
  maxFiles?: string;
  maxSize?: string;
  zippedArchive?: boolean;
}
