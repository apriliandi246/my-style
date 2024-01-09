const config = {
	cache: false,
	verbose: true,
	collectCoverage: true,
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/my-style/packages/__dev_helpers__"],
	coveragePathIgnorePatterns: ["/my-style/packages/__dev_helpers__"]
};

export default config;
