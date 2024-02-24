import { Mocked, vi } from 'vitest';
import winston from 'winston';

vi.mock('winston');

type MockWinstonLogger = {
  createLogger: () => { log: () => void };
  format: object;
  transports: object;
};

const winstonMock = winston as unknown as Mocked<MockWinstonLogger>;
const createLoggerReturnMock = {
  log: vi.fn().mockImplementation(() => console.log('mocked')),
};

winstonMock.createLogger.mockReturnValue(createLoggerReturnMock);

export { winstonMock as default, createLoggerReturnMock };
