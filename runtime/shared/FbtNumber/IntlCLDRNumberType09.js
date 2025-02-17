/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<fb0fb3a9522cb07a7afe0f2c1e679ab6>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType09 = {
  getVariation(n: number): number {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType09;
