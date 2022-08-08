import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/'

export const routes = {
    login: 'auth/login',
    authCheck: 'auth/me',
    sensorsList: 'api/v1/sensors',
}

const getConfig = () => {
    const access_token = localStorage.getItem("access_token")

    return {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }
}
export const postRequest = (url, data) => axios.post(`${baseUrl}${url}`, data, getConfig())

export const getRequest = (url) => axios.get(`${baseUrl}${url}`, getConfig())

export const putRequest = (url, data) => axios.put(`${baseUrl}${url}`, data)

export const patchRequest = (url, data) => axios.patch(`${baseUrl}${url}`, data, getConfig())

export const deleteRequest = (url) => axios.delete(`${baseUrl}${url}`, getConfig())
