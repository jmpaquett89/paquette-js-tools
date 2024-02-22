type LoggerFileConfig = {
  enabled: boolean;
  dateFormat?: string;
  extension?: string;
  filename?: string;
  dirname?: string;
  maxFiles?: string;
  maxSize?: string;
  shouldZipArchive?: boolean;
};

type LoggerConfig = {
  file?: LoggerFileConfig;
};
