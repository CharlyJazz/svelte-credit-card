export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte"],
  extensionsToTreatAsEsm: [".svelte", ".ts"],
  collectCoverage: true,
};
