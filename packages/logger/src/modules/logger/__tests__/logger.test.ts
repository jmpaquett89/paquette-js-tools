import { Mock, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import winston from 'winston';

import Logger from '../logger';

vi.mock('winston', () => {
  const createLogger = vi.fn().mockReturnValue({ log: vi.fn() });
  const format = {
    align: vi.fn(),
    combine: vi.fn(),
    printf: vi.fn(),
    timestamp: vi.fn(),
  };
  const transports = {
    Console: vi.fn(),
  };
  const winstonMock = {
    createLogger,
    format,
    transports,
  };

  return {
    default: {
      ...winstonMock,
    },
    ...winstonMock,
  };
});

const createLoggerMock = {
  log: vi.fn(),
};

(winston.createLogger as Mock).mockReturnValue(createLoggerMock);

describe('Logger', () => {
  let logger: Logger | null;

  beforeAll(() => {
    logger = new Logger('vitest');
  });

  afterEach(() => {
    logger = null;
  });

  it(`
    Given the class is intantiated,
    when the debug method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.debug('debug method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the error method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.error('error method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the fatal method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.fatal('fatal method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the info method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.info('info method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the trace method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.trace('trace method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the warn method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.warn('warn method invoked');
    expect(createLoggerMock.log).toHaveBeenCalled();
  });
});
