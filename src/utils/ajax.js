import axios from "axios";
// axios.defaults.baseURL = 'http://vue.cc';
axios.defaults.baseURL = '//web.org';

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // console.log('请求错误啦')
    return Promise.reject(error);
});


export const baseAjax = function (url, type="GET", params = {}, headers = {}) {
    let axiosBase = {
        method: type,
        url: url,
        headers: headers
    }
    switch (type) {
        case 'GET':
            axiosBase.params=params
            break;
        case 'POST':
            axiosBase.data=params
            break;
        default:
            axiosBase.params=params
    }
    return axios({...axiosBase});
}

export const get = (url, params, headers) =>{
    return baseAjax(url, "GET", params, headers)
}
export const post = (url, params, headers) =>{
    return baseAjax(url, "POST", params, headers)
}
