import { Injectable } from '@angular/core';
import { Config } from './app.config';

@Injectable()
export class GlobalSettingsService {
  config = Config;

  constructor() {
  }

  get() {
    return this.config;
  }
}
