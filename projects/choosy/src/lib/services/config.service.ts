import { Inject, Injectable } from '@angular/core';
import * as merge from 'deepmerge';
import { DEFAULT_CONFIG } from '../default-config';
import { ChoosyConfig } from '../models';
@Injectable()
export class ConfigService {
  constructor(@Inject(DEFAULT_CONFIG) public defaultConfig: ChoosyConfig) {}

  mergeWithDefault(config: Partial<ChoosyConfig>): ChoosyConfig {
    return merge(this.defaultConfig, config);
  }

  mergeAllWithDefault(...configs: Partial<ChoosyConfig>[]): ChoosyConfig {
    return merge.all([this.defaultConfig, ...configs]);
  }
}
