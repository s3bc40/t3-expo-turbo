// jest.config.js (Root of the monorepo)

/** @type {import('jest').Config} */
const config = {
  // Use 'projects' to run Jest against specific packages
  projects: [
    {
      displayName: "API",
      // Root folder for this Jest project
      rootDir: "<rootDir>/packages/api",
      // Transform files using ts-jest for TypeScript support
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
      // Target files ending in .test.ts or .spec.ts
      testMatch: ["<rootDir>/src/**/*.test.ts"],
      // Use the local tsconfig.json for type checking
      testEnvironment: "node",
      moduleFileExtensions: ["ts", "js", "json", "node"],
    },
    // Add other projects (e.g., UI, Web, Mobile) here later
  ],
};

module.exports = config;