import { AbstractConfigSetLevels } from 'winston/lib/winston/config';

export default interface LoggerLevels extends AbstractConfigSetLevels {
  fatal: number;
  error: number;
  warn: number;
  trace: number;
  info: number;
  debug: number;
}
