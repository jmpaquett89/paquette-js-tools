import {
  Color,
  blackBright,
  blue,
  cyan,
  red,
  whiteBright,
  yellow,
} from 'colorette';

import { LogLevel } from './levels';

const getColor = (level: string): Color => {
  switch (level) {
    case LogLevel.DEBUG:
      return blackBright;
    case LogLevel.FATAL:
      return red;
    case LogLevel.ERROR:
      return red;
    case LogLevel.INFO:
      return blue;
    case LogLevel.TRACE:
      return whiteBright;
    case LogLevel.WARN:
      return yellow;
    default:
      return cyan;
  }
};

export { getColor };
