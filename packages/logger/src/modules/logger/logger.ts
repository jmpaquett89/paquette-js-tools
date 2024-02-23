import { createLogger, Logger as WinstonLogger } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { consoleFormat, fileFormat } from '../../utils/formats';

enum LogLevel {
  DEBUG = 'debug',
  ERROR = 'error',
  FATAL = 'fatal',
  INFO = 'info',
  TRACE = 'trace',
  WARN = 'warn',
}

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  trace: 3,
  info: 4,
  debug: 5,
};

type LogMessage = string;

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
};

export default class Logger {
  private readonly instance: LoggerInstance;

  private readonly config: LoggerConfig;

  private readonly transports;

  private readonly name;

  private readonly levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    trace: 3,
    info: 4,
    debug: 5,
  };

  constructor(name, config?) {
    this.config = config;
    this.name = name;
    const consoleTransport = new this.transports.Console(consoleFormat);
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

  private log(message: LogMessage, logLevel: LogLevel, context?) {
    this.instance.log(logLevel, message, { context });
  }

  public debug(message: LogMessage, context?) {
    this.log(message, LogLevel.DEBUG, context);
  }

  public error(message: LogMessage, context?) {
    this.log(message, LogLevel.ERROR, context);
  }

  public fatal(message: LogMessage, context?) {
    this.log(message, LogLevel.FATAL, context);
  }

  public info(message: LogMessage, context?) {
    this.log(message, LogLevel.INFO, context);
  }

  public trace(message: LogMessage, context?) {
    this.log(message, LogLevel.TRACE, context);
  }

  public warn(message: LogMessage, context?) {
    this.log(message, LogLevel.WARN, context);
  }
}
