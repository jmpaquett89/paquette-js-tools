import { createLogger, Logger as WinstonLogger, LoggerOptions } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { consoleFormat, fileFormat } from "../../utils/formats";

enum LogLevel {
  DEBUG = "debug",
  ERROR = "error",
  FATAL = "fatal",
  INFO = "info",
  TRACE = "trace",
  WARN = "warn",
}

const defaultLogLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  trace: 3,
  info: 4,
  debug: 5,
};

type LogMessage = string;
type LogContext = {};

interface LoggerInstance extends WinstonLogger {}

export default class Logger {
  private readonly instance: LoggerInstance;

  private readonly config: LoggerConfig;

  private readonly transports;

  private readonly name;

  constructor(name, config?) {
    this.config = config;
    this.name = name;
    const consoleTransport = new this.transports.Console(consoleFormat);
    const fileTransport = new DailyRotateFile({
      filename: `${this.name}-%DATE%.log`,
      zippedArchive: true,
      maxSize: "10m",
      maxFiles: "14d",
      format: fileFormat,
    });

    this.instance = createLogger({
      transports: [consoleTransport, fileTransport],
    });
  }

  private log(message: LogMessage, logLevel: LogLevel, context?: LogContext) {
    this.instance.log(logLevel, message, { context });
  }

  public debug(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.DEBUG, context);
  }

  public error(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.ERROR, context);
  }

  public fatal(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.FATAL, context);
  }

  public info(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.INFO, context);
  }

  public trace(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.TRACE, context);
  }

  public warn(message: LogMessage, context?: LogContext) {
    this.log(message, LogLevel.WARN, context);
  }
}
