import { http, url } from "helper/http";
const urlExpress = "http://localhost:5000"; // backend localku pake expree
// const urlExpress = 'https://rakamin-expressjs.herokuapp.com'
// backend localku pake expree

export const getTrxFromCustomer = async (iData) => {
  const datas = await http.get(
    `${url}/transaksi?id_customer=${localStorage.getItem("id")}&status=2`
  );
  return datas.data;
};

export const deleteTrx = async (iData) => {
  // alert(iData)
  console.log(iData, "trxx")
  const datas = await http.delete(`${url}/transaksi/delete`, {data : iData});
  console.log(datas, "trxx")
  return datas.data;
};
export const postRating = async (iData) => {
  const datas = await http.post(`${url}/transaksi/rating`, iData);
  return datas.data;
};
