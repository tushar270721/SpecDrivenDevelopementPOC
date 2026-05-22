'use strict';

require('dotenv').config();

// Environment setup
const targetEnv = process.env.TARGET_ENVIRONMENT || 'local';

// Base URLs by environment
const envConfig = {
    local: {
        baseUrl: 'http://localhost:3000',
        apiUrl: 'http://localhost:3000/api',
    },
    development: {
        baseUrl: 'https://dev.example.com',
        apiUrl: 'https://api-dev.example.com',
    },
    staging: {
        baseUrl: 'https://staging.example.com',
        apiUrl: 'https://api-staging.example.com',
    },
    production: {
        baseUrl: 'https://app.example.com',
        apiUrl: 'https://api.example.com',
    }
};

// Chrome browser configuration
const baseChrome = 'chrome:headless --disable-notifications --disable-translate --disable-infobars --no-first-run';

// Configuration object
const config = {
    // Environment
    targetEnv: targetEnv,
    baseUrl: envConfig[targetEnv]?.baseUrl || envConfig.local.baseUrl,
    apiUrl: envConfig[targetEnv]?.apiUrl || envConfig.local.apiUrl,

    // Test source files
    src: [
        'tests/step_definitions/**/*.js',
        'tests/features/**/*.feature',
    ],

    // Timeouts
    elementTimeout: 60000,      // Wait for element to exist
    pageLoadTimeout: 30000,     // Page load timeout
    apiTimeout: 10000,          // API response timeout

    // Browser configuration
    browsers: [baseChrome],
    emulation: {
        width: 1920,
        height: 1080,
    },

    // Parallel execution
    concurrency: 5,

    // Health test
    healthTest: false,

    // Runner options
    runnerOptions: {
        disableMultipleWindows: true,
    },

    // Authentication
    authCredentials: {
        username: process.env.TEST_USERNAME || 'testuser',
        password: process.env.TEST_PASSWORD || 'Test@12345',
    },

    // Azure DevOps Integration (optional)
    azureDevOps: {
        enabled: process.env.AZDO_ENABLED === 'true',
        token: process.env.AZDO_TOKEN,
        organizationUrl: process.env.AZDO_ORG_URL,
        projectName: process.env.AZDO_PROJECT_NAME,
    },

    // Logging
    logHttpPattern: '^DO_NOT_LOG$',
    logResponseBody: false,

    // Features
    visualRegression: false,
    screenshotsOnFailure: true,
};

module.exports = config;
