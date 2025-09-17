// This file contains constants with no other project dependencies
// to help prevent circular dependency issues.

// These values are injected by Webpack's DefinePlugin via nuxt.config.js
// and can be configured in a .env file.
export const websiteUrl = process.env.websiteUrl;
export const backendUrl = process.env.backendUrl;