const requireContext = require('require-context');
const path = require('path');
const files = requireContext(path.resolve(__dirname, './mockData'), true, /\.js$/);
const proxyApi = require('./proxy-ajax');

module.exports = (middlewares, devServer) => {
    files.keys().forEach(key => {
        const [method, fileName] = key.split('\\');
        const name = path.basename(fileName, '.js');
        const data = files(key).default || files(key)
        if (proxyApi[method] && proxyApi[method][name]) {
            const url = proxyApi[method][name].pathName ?? `/${name.replaceAll('_', '/')}`;

            devServer.app[method](`${process.env.VUE_APP_BASE_API}${url}`, (req, response) => {
                response.send(JSON.stringify(typeof data === 'function' ? data({
                    query: req.query,
                    body: req.body,
                }) : data))
            });
        }
    });

    return middlewares;
};
