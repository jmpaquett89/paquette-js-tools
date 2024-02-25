import { createLogger, Logger as WinstonLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { consoleFormat, fileFormat } from '../../utils/formats';
import { LogLevel } from '../../utils/levels';

type LogMessage = string;

type LogMeta = object;

type LoggerInstance = WinstonLogger;

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
  meta?: object | string;
};

export default class Logger {
  private readonly instance: LoggerInstance;

  private readonly config?: LoggerConfig;

  private readonly name: string;

  private readonly levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    trace: 3,
    info: 4,
    debug: 5,
  };

  constructor(name: string, config?: LoggerConfig) {
    this.config = config;
    this.name = name;
    const consoleTransport = new transports.Console({ format: consoleFormat });
    const fileTransport = new DailyRotateFile({
      filename: `${this.name}-%DATE%.log`,
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '14d',
      format: fileFormat,
    });

    this.instance = createLogger({
      levels: this.levels,
      transports: [consoleTransport, fileTransport],
    });
  }

  private log(message: LogMessage, logLevel: LogLevel, meta?: LogMeta) {
    console.log(this.config, this.name);
    this.instance.log(logLevel, message, { ...meta });
  }

  public debug(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.DEBUG, meta);
  }

  public error(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.ERROR, meta);
  }

  public fatal(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.FATAL, meta);
  }

  public info(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.INFO, meta);
  }

  public trace(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.TRACE, meta);
  }

  public warn(message: LogMessage, meta?: LogMeta) {
    this.log(message, LogLevel.WARN, meta);
  }
}
