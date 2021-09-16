import { http, url } from 'helper/http';

export const agentProfile = async (iData) => {
    // const datas = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    const datas = await http.get(`${url}/agen/3`);
    return datas.data
}

export const getTrxFromAgent = async (iData) => {
    // const datas = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    const datas = await http.get(`${url}/transaksi?id_agen=3&status=0`);
    console.log('>>1', datas)
    return datas.data
}
