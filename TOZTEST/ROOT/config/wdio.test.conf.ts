import { config as baseConfig } from "../../../wdio.conf.js";
export const config = Object.assign(baseConfig, {
    // Test environment variables and keys values
    environment:"TestEnvironment",
    TestURL:"https://the-internet.herokuapp.com/",
})