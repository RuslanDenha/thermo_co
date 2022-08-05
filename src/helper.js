import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/'

export const postRequest = (url, data) => axios.post(`${baseUrl}${url}`, data)
export const getRequest = (url) => {
    const access_token = localStorage.getItem("access_token")

    console.log({access_token})

    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }

    return axios.get(`${baseUrl}${url}`, config)
}
export const putRequest = (url, data) => axios.put(`${baseUrl}${url}`, data)
export const patchRequest = (url, data) => axios.patch(`${baseUrl}${url}`, data)
export const deleteRequest = (url, data) => axios.delete(`${baseUrl}${url}`, data)