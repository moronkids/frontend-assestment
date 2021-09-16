import { http, url } from 'helper/http';


export const getTrxFromCustomer = async (iData) => {
    // const datas = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    const datas = await http.get(`${url}/transaksi?id_customer=1&status=2`);
    console.log('>>1', datas)
    return datas.data
}
