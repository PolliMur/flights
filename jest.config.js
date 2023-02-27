module.exports = {
    //collectCoverage: true,
    //collectCoverageFrom: ['src/**/*.{js,jsx}'],
    //coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    restoreMocks: true,
    clearMocks: true,
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
