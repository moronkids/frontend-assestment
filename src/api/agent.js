import { http, url } from "helper/http";
const id = localStorage.getItem("id");
export const agentProfile = async (iData) => {
  const datas = await http.get(`${url}/profil?id_agen=${id}`);
  return datas.data;
};

export const getTrxFromAgent = async (iData) => {
  const datas = await http.get(`${url}/transaksi?id_agen=${id}&status=0`);
  return datas.data;
};

export const postDeclineTrxAgent = async (iData) => {
  const datas = await http.post(`${url}/transaksi/batal`);
  console.log(">>1", datas);
  return datas.data;
};

export const postApproveTrxAgent = async (iData) => {
  const datas = await http.post(`${url}/transaksi/konfirmasi`, iData);
  console.log(">>1", datas);
  return datas.data;
};
