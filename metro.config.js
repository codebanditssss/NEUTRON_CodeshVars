// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add support for expo-router
config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs'];

module.exports = config; 