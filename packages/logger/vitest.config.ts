import { defineProject, mergeConfig } from 'vitest/config';

import sharedConfig from '../../vite.shared';

export default mergeConfig(sharedConfig, defineProject({}));
