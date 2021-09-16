import { http, url } from 'helper/http';

export const agentProfile = async (iData) => {
    // const datas = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    const datas = await http.get(`${url}/agen/3`);
    return datas.data
}