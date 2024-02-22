import { format } from "winston";

const TIMESTAMP = "YYYY-MM-DD HH:mm:ss";

const defaultFormats = [
  format.colorize(),
  format.timestamp({
    format: TIMESTAMP,
  }),
];

const messageFormat = (info) =>
  `${info.timestamp} [${info.level}]: ${info.message}`;

const defaultConsoleFormats = [...defaultFormats, format.printf(messageFormat)];

const defaultFileFormats = [
  ...defaultFormats,
  format.align(),
  format.printf(messageFormat),
];

const consoleFormat = format.combine(...defaultConsoleFormats);

const fileFormat = format.combine(...defaultFileFormats);

export { consoleFormat, fileFormat };
