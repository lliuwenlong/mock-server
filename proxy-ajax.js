/**
 * @file 要代理借口的接口
 */

function createProxyApi(pathName, isProxy = true) {
    return {
        isProxy,
        pathName,
    };
}

const GET_MAP = {
    'user_add': createProxyApi('/user/add1111'),
};
const POST_MAP = {
    'sys_menu': createProxyApi(),
};


module.exports = {
    get: GET_MAP,
    post: POST_MAP,
}
