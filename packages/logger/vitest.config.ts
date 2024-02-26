import { defineProject, mergeConfig } from 'vitest/config';

import sharedConfig from '../../vitest.shared';

export default defineProject(
  mergeConfig(sharedConfig, {
    test: {},
  }),
);
