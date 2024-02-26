import { createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { mergeConfig } from '../../utils/config';
import { defaultLoggerLevels } from '../../utils/constants';
import { consoleFormat, fileFormat } from '../../utils/formats';
import { LogLevel } from '../../utils/levels';
import defaultConfig from './config';
import DefaultLoggerConfig from './interfaces/config/DefaultLoggerConfig';
import LoggerConfig from './interfaces/config/LoggerConfig';
import LoggerFileConfig from './interfaces/config/LoggerFileConfig';
import LoggerMeta from './interfaces/config/LoggerMeta';
import LoggerInstance from './interfaces/logger/LoggerInstance';
import LoggerLevels from './interfaces/logger/LoggerLevels';
import LoggerTransport from './interfaces/logger/LoggerTransport';

export default class Logger {
  private readonly instance: LoggerInstance;

  private readonly config: DefaultLoggerConfig;

  private readonly name: string;

  private readonly levels: LoggerLevels = defaultLoggerLevels;

  private readonly transports: LoggerTransport[] = [];

  constructor(name: string, config?: LoggerConfig) {
    this.config = mergeConfig(defaultConfig, config);
    this.name = name;
    const consoleTransport = new transports.Console({ format: consoleFormat });

    this.transports.push(consoleTransport);

    if (this.config?.file?.enabled) {
      const fileTransport = new DailyRotateFile({
        filename: this.buildLogFilename(this.config.file),
        zippedArchive: true,
        maxSize: '10m',
        maxFiles: '14d',
        format: fileFormat,
      });

      this.transports.push(fileTransport);
    }

    this.instance = createLogger({
      levels: this.levels,
      transports: this.transports,
    });
  }

  private buildLogFilename(fileConfig: LoggerFileConfig): string {
    const { extension, filename } = fileConfig;

    return `${this.name}-${filename}.${extension}`;
  }

  private log(message: string, logLevel: LogLevel, meta?: LoggerMeta): void {
    this.instance.log(logLevel, message, { ...meta });
  }

  public debug(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.DEBUG, meta);
  }

  public error(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.ERROR, meta);
  }

  public fatal(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.FATAL, meta);
  }

  public info(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.INFO, meta);
  }

  public trace(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.TRACE, meta);
  }

  public warn(message: string, meta?: LoggerMeta): void {
    this.log(message, LogLevel.WARN, meta);
  }
}
