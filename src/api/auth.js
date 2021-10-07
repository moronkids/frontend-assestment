import { http, url } from "helper/http";
import jwt_decode from "jwt-decode";
export const apiLogin = async (iData) => {
  const datas = await http.post(`${url}/login`, iData);
  console.log(">>", datas.data.data);
  const decode_token = jwt_decode(datas.data.data);
  console.log(decode_token);
  if (datas.data.status === 202 || datas.data.status === 200) {
    console.log("masuk");
    if (decode_token.role === "Customer") {
      console.log("masuk customer");
      localStorage.setItem("token", "customer");
      localStorage.setItem("tokenGen", datas.data.data);
      window.location.href = "/";
      return false;
    } else if (decode_token.role === "Agen") {
      console.log("masuk agent");
      localStorage.setItem("token", "agent");
      localStorage.setItem("tokenGen", datas.data.data);
      localStorage.setItem("id", decode_token.id);
      window.location.href = "/";
      return false;
    }
    return false;
  }
  return datas;
};
