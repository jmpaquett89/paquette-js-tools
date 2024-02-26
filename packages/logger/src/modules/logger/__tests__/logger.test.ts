import { afterEach, beforeAll, describe, expect, it } from 'vitest';

import Logger from '../logger';
import { createLoggerReturnMock } from './fixtures/winston';

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
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the error method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.error('error method invoked');
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the fatal method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.fatal('fatal method invoked');
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the info method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.info('info method invoked');
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the trace method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.trace('trace method invoked');
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });

  it(`
    Given the class is intantiated,
    when the warn method is invoked,
    then I expect the log method to be called
  `, () => {
    logger?.warn('warn method invoked');
    expect(createLoggerReturnMock.log).toHaveBeenCalled();
  });
});
