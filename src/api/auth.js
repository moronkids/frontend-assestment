
// import { api_non_logged } from 'helper/api';
import { http, url } from 'helper/http';

export const apiLogin = async (iData) => {
    // const datas = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    const datas = await http.post(`${url}/login/`, iData);
    // alert(iData);
    console.log(">>", iData.password )
    if(iData.password === null || iData.email === null) {
        console.log("<<",iData)
        return false
    }
    if (datas.data.status === 200) {
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
    return datas;
}