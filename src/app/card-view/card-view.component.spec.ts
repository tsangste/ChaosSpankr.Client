/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardViewComponent } from './card-view.component';

describe('Component: CardView', () => {
  it('should create an instance', () => {
    let component = new CardViewComponent();
    expect(component).toBeTruthy();
  });
});
