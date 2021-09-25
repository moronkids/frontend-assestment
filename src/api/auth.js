import { http, url } from 'helper/http';

export const apiLogin = async (iData) => {
    const datas = await http.post(`${url}/login/`, iData);
    if (datas.data.status === 202) {
        if(iData.username === 'customer@rakamin.com') {

            localStorage.setItem('token', 'customer')
            window.location.href = "/"
            return false
        }
        else if(iData.username === 'agent@rakamin.com') {

            localStorage.setItem('token', 'agent')
            window.location.href = "/"
            return false
        }
        return false
    }
    return datas
}