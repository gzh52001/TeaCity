const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:10086' : 'http://120.79.19.106:10086';
export async function request(url,data={},options={}){
    url = baseUrl + url;
    if(options.method){
        options.method = options.method.toLowerCase();
    }
    if(options.method === "get" || options.method === 'delete'){
        let params = [];
        for(let key in data){
           params.push(`${key}=${data[key]}`);
        }
        url = url + (url.includes('?') ? '&' : '?') + params.join('&');
    }else if(['post','put','patch'].includes(options.method)){
        data = JSON.stringify(data);
        options.body = data;
        console.log(data);
        // options.headers['content-type'] = 'application/json';
    }
    return await fetch(url,{
        ...options,
        headers:{
            'content-type':'application/json'
        }
    }).then(res=>res.json());
}

export function get(url,data = {}, options = {method: 'get'}){
    return request(url,data,options)
}

export function del(url,data = {},options = {method:'delete'}){
    return request(url,data,options)
}

export function post(url,data = {},options = {method:'post'}){
    return request(url,data,options)
}

export function put(url,data = {},options = {method:'put'}){
    return request(url,data,options)
}

export function patch(url,data = {},options = {method:'patch'}){
    return request(url,data,options)
}

export default {
    request,
    get,
    post,
    put,
    patch,
    del
}