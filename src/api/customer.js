import { http, url } from 'helper/http';
const urlExpress = 'http://localhost:5000' // backend localku pake expree

export const getTrxFromCustomer = async (iData) => {
    const datas = await http.get(`${urlExpress}/api/v1/customer`);
    return datas.data
}

export const deleteTrx = async (iData) => {
    const datas = await http.delete(`${url}/transaksi/delete`);
    return datas.data
}
export const postRating = async (iData) => {
    const datas = await http.post(`${url}/transaksi/rating`);
    return datas.data
}


