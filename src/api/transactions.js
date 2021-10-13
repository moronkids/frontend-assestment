import { http, url } from "helper/http";

//create transaction
export const postTransaction = async (iData) => {
  const datas = await http.post(`${url}/transaksi/buat`, iData);
  return datas.data;
};
//get avail agent
export const getAvailAgent = async (iData) => {
  const datas = await http.post(`${url}/cariagen`, iData);
  return datas.data;
};
//provinsi
export const getProvince = async (iData) => {
  const datas = await http.get(`${url}/provinsi`);
  return datas.data;
};
//kota
export const getCity = async (iData) => {
    const datas = await http.post(`${url}/kota`, iData);
    console.log(iData, datas, "isinyapa")
  return datas.data;
};
//kecamatan
export const getDistrict = async (iData) => {

  const datas = await http.post(`${url}/kecamatan`, iData);
    console.log(iData, datas, "isinyapa");
  return datas.data;
};

