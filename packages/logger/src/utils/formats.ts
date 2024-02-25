import { format } from 'winston';
import { getColor } from './color';

type LogInfo = {
  level: string;
  message: string;
  [key: string | symbol]: string;
};

const TIMESTAMP = 'YYYY-MM-DD HH:mm:ss';

const defaultFormats = [
  format.timestamp({
    format: TIMESTAMP,
  }),
];

const messageFormat = (info: LogInfo) => {
  const color = getColor(info.level);
  return `${info.timestamp} [${color(info.level)}]: ${info.message}`;
};

const defaultConsoleFormats = [...defaultFormats, format.printf(messageFormat)];

const defaultFileFormats = [
  ...defaultFormats,
  format.align(),
  format.printf(messageFormat),
];

const consoleFormat = format.combine(...defaultConsoleFormats);

const fileFormat = format.combine(...defaultFileFormats);

export { consoleFormat, fileFormat };
