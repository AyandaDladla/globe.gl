import buildConfig from './rollup.config.js';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// use first output of first config block for dev
const config = Array.isArray(buildConfig) ? buildConfig[0] : buildConfig;
Array.isArray(config.output) && (config.output = config.output[0]);

config.plugins = [
    ...config.plugins,
    serve({
        open: true,
        openPage: '/Weather%20App/weather-timezone/',
        contentBase: '.',
        port: 3000
    }),
    livereload('dist')
];

export default config;