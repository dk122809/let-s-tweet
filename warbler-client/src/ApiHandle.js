import axios from 'axios';

export const apiHandle = (apiLink,apiData,method,token)=>{
    const baseUrl = 'http://localhost:8081/api';
    return axios({
        method: method,
        url: `${baseUrl}${apiLink}`,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: apiData
    })
    .then(response => {
        return response;
    })
    .catch(error => {
        return error.response;
    });
}

