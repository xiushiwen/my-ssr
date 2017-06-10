const devConfig = {
    baseUrl: 'https://test.com',
    name: 'dev'
};

const prodConfig = {
    baseUrl: 'https://prod.com',
    name: 'prod'
};

const isProdMode = process.env.NODE_ENV === 'production';

module.exports = {
    config: isProdMode ? prodConfig : devConfig
};
