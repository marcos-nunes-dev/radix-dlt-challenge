module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{jsx,ts,tsx}',
        '!**/*.{js}',
        '!**/*.stories.tsx',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/pages/**',
        '!**/stories/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
};
