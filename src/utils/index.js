//axios捕错
export const throwErr = (code, response) => {
    let message = '请求错误'
    switch (code) {
        case -1:
            message = '找不到appkey'
            break
        case -3:
            message = '签名错误'
            break
        case -101:
            message = '用户未登录'
            break
        case -400:
            message = '请求参数错误'
            break
        case -413:
            message = '文件超出大小限制'
            break
        case -444:
            message = '无访问权限'
            break
        case -500:
            message = '服务器内部异常'
            break
        case 400:
            message = '请求错误'
            break
        case 401:
            message = '未授权，请登录'
            break
        case 403:
            message = '拒绝访问'
            break
        case 404:
            message = '电波无法达到~' //请求地址出错: ${response.config.url}
            break
        case 408:
            message = '请求超时'
            break
        case 500:
            message = '服务器内部错误'
            break
        case 501:
            message = '服务未实现'
            break
        case 502:
            message = '网关错误'
            break
        case 503:
            message = '服务不可用'
            break
        case 504:
            message = '网关超时'
            break
        case 505:
            message = 'HTTP版本不受支持'
            break
        default:
    }
    return message
}

//json转url参数
export const j2UrlParams = (json) => {
    return Object.keys(json).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(json[key])).join('&')
}

//对象排序
//let sortObj = infoObj.sort(compare("age"))
export const compare = (property) => {
    return function(obj1,obj2){
        let value1 = obj1[property]
        let value2 = obj2[property]
        return value1 - value2  // 升序
    }
}

//map类型转换成v-select items
export const m2SelectItems = (data) => {
    return [ ...data.entries() ].map(item => ({text: item[1], value: item[0]}))
}