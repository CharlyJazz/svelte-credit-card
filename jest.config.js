export default {
  testEnvironment: "jsdom",
  transform: {
    // TODO: change this value to just "svelte-jester" with the next release of "svelte-jester"
    "^.+\\.svelte$": "./node_modules/svelte-jester/dist/transformer.mjs",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte"],
  extensionsToTreatAsEsm: [".svelte", ".ts"],
  collectCoverage: true,
};
