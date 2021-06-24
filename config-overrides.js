const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias:
        {
            "@assets":path.resolve(__dirname,'src/assets'),
            "@images":path.resolve(__dirname,'public/images'),
            "@components":path.resolve(__dirname,'src/view/components'),
        },
    };
    return config;
};